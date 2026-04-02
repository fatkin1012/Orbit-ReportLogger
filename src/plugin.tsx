/* @refresh skip */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import type { DataEnvelope, IAppContext, IPlugin } from '@toolbox/sdk'
import { builtInTemplates, defaultPayload } from './defaults'
import './plugin.css'
import {
  CASE_REPORT_LINK_CREATED,
  CASE_REPORT_TEMPLATE_IMPORTED,
  CASE_REPORT_UPDATED,
  DATA_VERSION,
  PLUGIN_ID,
  STORAGE_KEY,
  TASKBOARD_TASK_SELECTED,
  TASKBOARD_TASK_UPDATED,
  TASK_COUNT_CHANGED,
  linkCreatedEventSchema,
  payloadSchema,
  reportSchema,
  reportUpdatedEventSchema,
  taskReportLinkSchema,
  taskSelectedEventSchema,
  taskSnapshotSchema,
  taskUpdatedEventSchema,
  templateImportedEventSchema,
  templateSchema,
  type PayloadV1,
  type Report,
  type TaskReportLink,
  type TaskSnapshot,
  type Template,
} from './schemas'
import { formatDate, previewText, safeJsonParse, throttle, uid } from './utils'

type IDataEnvelope<T> = DataEnvelope<T>

type SaveSource = 'storage' | 'indexeddb-bridge'

type IndexedDbBridge = {
  get?: (namespace: string, key: string) => Promise<unknown>
  save?: (namespace: string, key: string, data: unknown, version: string) => Promise<void>
}

type ConflictChoice = 'local' | 'external' | 'manual'

type ConflictState = {
  reportId: string
  externalUpdatedAt: number
  localUpdatedAt: number
} | null

type TemplateField = {
  id: string
  title: string
  value: string
  section?: string
}

type CreateMode = 'report' | 'template'

type TemplateKind = '#' | '##' | '###'

type TemplateDraftItem = {
  id: string
  kind: TemplateKind
  title: string
  value: string
}

const NAMESPACES = {
  taskboardTasks: 'taskboard.tasks',
  reports: 'caseLogger.reports',
  links: 'caseLogger.taskReportLinks',
  templates: 'caseLogger.templates',
} as const

const AUTHOR_FALLBACK = 'report-logger-user'

const log = {
  restoreStart: () => console.info('[plugin] restore start'),
  restorePayload: (preview: string, extractedPath: string) =>
    console.info('[plugin] restore payload', { preview, extractedPath }),
  restoreSuccess: (count: number, source: string) =>
    console.info('[plugin] restore success', { count, source }),
  restoreFailed: (error: unknown) => console.error('[plugin] restore failed', { error }),
  saveTriggered: (count: number) => console.info('[plugin] save triggered', { count }),
  saveFailed: (error: unknown) => console.error('[plugin] save failed', { error }),
  linkCreateStart: (taskId: string, reportId: string) =>
    console.info('[report-logger] link create start', { taskId, reportId }),
  linkCreateSuccess: (taskId: string, reportId: string) =>
    console.info('[report-logger] link create success', { taskId, reportId }),
  linkCreateFailed: (error: unknown) => console.error('[report-logger] link create failed', { error }),
  templateImportStart: (name: string) =>
    console.info('[report-logger] template import start', { name: previewText(name, 40) }),
  templateImportSuccess: (templateId: string) =>
    console.info('[report-logger] template import success', { templateId }),
  templateImportFailed: (error: unknown) =>
    console.error('[report-logger] template import failed', { error }),
  taskSyncReceived: (taskId: string) => console.info('[report-logger] task sync received', { taskId }),
  conflictDetected: (reportId: string) =>
    console.warn('[report-logger] conflict detected', { reportId }),
}

function readBridge(context: IAppContext): IndexedDbBridge | null {
  const candidate = (context.runtimeConfig as Record<string, unknown> | undefined)?.indexedDbBridge
  if (!candidate || typeof candidate !== 'object') {
    return null
  }
  return candidate as IndexedDbBridge
}

function normalizeUnknown(input: unknown): { value: unknown; extractedPath: string } {
  let current = input
  let path = 'root'

  for (let i = 0; i < 6; i += 1) {
    if (typeof current === 'string') {
      const parsed = safeJsonParse(current)
      if (parsed === null) {
        break
      }
      current = parsed
      path = `${path}.json`
      continue
    }
    if (current && typeof current === 'object') {
      const record = current as Record<string, unknown>
      if ('data' in record) {
        current = record.data
        path = `${path}.data`
        continue
      }
      if ('value' in record) {
        current = record.value
        path = `${path}.value`
        continue
      }
      if ('payload' in record) {
        current = record.payload
        path = `${path}.payload`
        continue
      }
      break
    }
    break
  }

  return { value: current, extractedPath: path }
}

function parseArrayCandidate(raw: unknown): unknown[] {
  const normalized = normalizeUnknown(raw).value
  if (Array.isArray(normalized)) {
    return normalized
  }
  if (normalized && typeof normalized === 'object') {
    const rec = normalized as Record<string, unknown>
    if (Array.isArray(rec.tasks)) {
      return rec.tasks
    }
  }
  return []
}

function migrateToV1(raw: unknown): PayloadV1 {
  const empty = defaultPayload()
  const normalized = normalizeUnknown(raw)
  log.restorePayload(previewText(normalized.value), normalized.extractedPath)

  if (Array.isArray(normalized.value)) {
    const maybeReports = normalized.value
      .map((item) => reportSchema.safeParse(item))
      .filter((item) => item.success)
      .map((item) => item.data)
    return {
      ...empty,
      reports: maybeReports,
      migrationMeta: {
        version: DATA_VERSION,
        upgrades: [{ from: 'legacy-array', to: DATA_VERSION, at: Date.now() }],
      },
    }
  }

  if (!normalized.value || typeof normalized.value !== 'object') {
    return empty
  }

  const rec = normalized.value as Record<string, unknown>
  const reportsRaw = rec.reports ?? rec[NAMESPACES.reports] ?? rec.tasks
  const linksRaw = rec.taskReportLinks ?? rec[NAMESPACES.links]
  const templatesRaw = rec.templates ?? rec[NAMESPACES.templates]
  const snapshotsRaw = rec.taskSnapshotCache ?? rec[NAMESPACES.taskboardTasks]

  const reports = parseArrayCandidate(reportsRaw)
    .map((item) => reportSchema.safeParse(item))
    .filter((item) => item.success)
    .map((item) => item.data)

  const taskReportLinks = parseArrayCandidate(linksRaw)
    .map((item) => taskReportLinkSchema.safeParse(item))
    .filter((item) => item.success)
    .map((item) => item.data)

  const importedTemplates = parseArrayCandidate(templatesRaw)
    .map((item) => templateSchema.safeParse(item))
    .filter((item) => item.success)
    .map((item) => item.data)

  const taskSnapshotCache = parseArrayCandidate(snapshotsRaw)
    .map((item) => taskSnapshotSchema.safeParse(item))
    .filter((item) => item.success)
    .map((item) => item.data)

  const merged = {
    ...empty,
    ...rec,
    reports,
    taskReportLinks,
    templates: importedTemplates.length > 0 ? importedTemplates : [...builtInTemplates],
    taskSnapshotCache,
    migrationMeta: {
      version: DATA_VERSION,
      upgrades: [
        {
          from: String((rec.migrationMeta as Record<string, unknown> | undefined)?.version ?? 'unknown'),
          to: DATA_VERSION,
          at: Date.now(),
        },
      ],
    },
  }

  const parsed = payloadSchema.safeParse(merged)
  return parsed.success ? parsed.data : empty
}

async function savePayload(context: IAppContext, payload: PayloadV1): Promise<SaveSource> {
  const envelope: IDataEnvelope<PayloadV1> = {
    pluginId: PLUGIN_ID,
    version: DATA_VERSION,
    timestamp: Date.now(),
    type: 'PERSIST',
    payload,
  }

  await context.storage.save(STORAGE_KEY, envelope, DATA_VERSION)

  const bridge = readBridge(context)
  if (bridge?.save) {
    await Promise.all([
      bridge.save(NAMESPACES.reports, STORAGE_KEY, payload.reports, DATA_VERSION),
      bridge.save(NAMESPACES.links, STORAGE_KEY, payload.taskReportLinks, DATA_VERSION),
      bridge.save(NAMESPACES.templates, STORAGE_KEY, payload.templates, DATA_VERSION),
    ])
    return 'indexeddb-bridge'
  }

  return 'storage'
}

async function restorePayload(context: IAppContext): Promise<{ payload: PayloadV1; source: SaveSource }> {
  log.restoreStart()
  const raw = await context.storage.get<unknown>(STORAGE_KEY)
  const payload = migrateToV1(raw)

  const bridge = readBridge(context)
  if (bridge?.get) {
    try {
      const taskSnapshotRaw = await bridge.get(NAMESPACES.taskboardTasks, STORAGE_KEY)
      const taskSnapshotCache = parseArrayCandidate(taskSnapshotRaw)
        .map((item) => taskSnapshotSchema.safeParse(item))
        .filter((item) => item.success)
        .map((item) => item.data)
      payload.taskSnapshotCache = taskSnapshotCache
      payload.syncMeta.lastSyncAt = Date.now()
      payload.syncMeta.sourcePlugin = 'taskboard'
      return { payload, source: 'indexeddb-bridge' }
    } catch (error) {
      payload.syncMeta.lastError = String(error)
    }
  }

  return { payload, source: 'storage' }
}

function resolveTemplate(
  templateContent: string,
  task: TaskSnapshot | null,
  author: string,
): { text: string; unresolved: string[] } {
  const map: Record<string, string> = {
    '{{task.title}}': task?.title ?? '',
    '{{task.id}}': task?.id ?? '',
    '{{today}}': new Date().toISOString().slice(0, 10),
    '{{author}}': author,
  }
  let text = templateContent
  for (const [key, val] of Object.entries(map)) {
    text = text.split(key).join(val)
  }

  const unresolved = Array.from(text.matchAll(/{{[^}]+}}/g)).map((item) => item[0])
  return { text, unresolved }
}

function parseTemplateSections(content: string): { fields: Array<{ title: string; value: string; section?: string }> } {
  const lines = content.split('\n')
  const fields: Array<{ title: string; value: string; section?: string }> = []

  let currentSection: string | undefined = undefined
  let currentFieldTitle: string | null = null
  let currentFieldLines: string[] = []

  const commitField = () => {
    if (!currentFieldTitle) {
      return
    }
    fields.push({
      title: currentFieldTitle,
      value: currentFieldLines.join('\n').trim(),
      section: currentSection,
    })
    currentFieldTitle = null
    currentFieldLines = []
  }

  for (const line of lines) {
    if (line.startsWith('# ') && !line.startsWith('## ') && !line.startsWith('### ')) {
      // Document title level - treat as editable field
      commitField()
      currentFieldTitle = line.slice(2).trim()
      currentFieldLines = []
      continue
    }

    if (line.startsWith('## ') && !line.startsWith('### ')) {
      // Section heading - only for grouping, not editable
      commitField()
      currentSection = line.slice(3).trim()
      currentFieldTitle = null
      continue
    }

    if (line.startsWith('### ')) {
      // Sub-item level - treat as editable field
      commitField()
      currentFieldTitle = line.slice(4).trim()
      currentFieldLines = []
      continue
    }

    if (currentFieldTitle) {
      currentFieldLines.push(line)
    }
  }

  commitField()

  return {
    fields,
  }
}

function composeTemplateSections(fields: TemplateField[]): string {
  const parts: string[] = []
  let currentSection: string | undefined = undefined

  for (const field of fields) {
    const isFirstInSection = field.section && field.section !== currentSection
    if (isFirstInSection) {
      currentSection = field.section
      parts.push(`## ${field.section}`)
      parts.push('')
    }

    const isTitle = !field.section
    const heading = isTitle ? '# ' : '### '
    parts.push(`${heading}${field.title}`)
    if (field.value.trim()) {
      parts.push(field.value.trim())
    }
    parts.push('')
  }

  return parts.join('\n').trim()
}

function composeTemplateDraft(items: TemplateDraftItem[]): string {
  const parts: string[] = []

  for (const item of items) {
    parts.push(`${item.kind} ${item.title.trim()}`.trim())

    if (item.kind === '##') {
      parts.push('')
      continue
    }

    if (item.value.trim()) {
      parts.push(item.value.trim())
    }
    parts.push('')
  }

  return parts.join('\n').trim()
}

function extractPrimaryFieldContent(content: string): string | null {
  const parsed = parseTemplateSections(content)
  const primaryField = parsed.fields.find((field) => !field.section)
  if (!primaryField) {
    return null
  }

  const firstLine = primaryField.value
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.length > 0)

  return firstLine ?? (primaryField.title.trim() || null)
}

function buildDocumentTitle(category: string, content: string, fallbackTitle = 'Case Report'): string {
  const primaryFieldContent = extractPrimaryFieldContent(content)
  const parts = [category.trim(), primaryFieldContent?.trim() ?? ''].filter(Boolean)
  if (parts.length > 0) {
    return parts.join(' - ')
  }
  return fallbackTitle
}

function extractImageTokens(text: string): Array<{ alt: string; src: string }> {
  const tokens: Array<{ alt: string; src: string }> = []
  const pattern = /!\[([^\]]*)\]\(([^)]+)\)/g
  let match: RegExpExecArray | null = pattern.exec(text)

  while (match) {
    tokens.push({ alt: match[1] || 'image', src: match[2] })
    match = pattern.exec(text)
  }

  return tokens
}

const IMAGE_TOKEN_REGEX = /!\[[^\]]*\]\([^)]+\)/g

function toDisplayValue(rawValue: string): string {
  let imageIndex = 0
  return rawValue.replace(IMAGE_TOKEN_REGEX, () => {
    imageIndex += 1
    return `^圖片${imageIndex}^`
  })
}

function restoreRawValueFromDisplay(previousRawValue: string, displayValue: string): string {
  const rawTokens = Array.from(previousRawValue.matchAll(IMAGE_TOKEN_REGEX)).map((match) => match[0])
  if (rawTokens.length === 0) {
    return displayValue
  }

  return displayValue.replace(/圖片(\d+)/g, (full, num) => {
    const idx = Number(num) - 1
    if (Number.isNaN(idx) || idx < 0 || idx >= rawTokens.length) {
      return full
    }
    return rawTokens[idx]
  })
}

function mapDisplayIndexToRawIndex(rawValue: string, displayIndex: number): number {
  const matches = Array.from(rawValue.matchAll(IMAGE_TOKEN_REGEX)).map((match, index) => ({
    start: match.index ?? 0,
    end: (match.index ?? 0) + match[0].length,
    display: `圖片${index + 1}`,
  }))

  let rawPos = 0
  let displayPos = 0

  for (const token of matches) {
    const plainLen = token.start - rawPos
    if (displayIndex <= displayPos + plainLen) {
      return rawPos + (displayIndex - displayPos)
    }

    displayPos += plainLen
    const tokenDisplayLen = token.display.length
    if (displayIndex <= displayPos + tokenDisplayLen) {
      return token.end
    }

    displayPos += tokenDisplayLen
    rawPos = token.end
  }

  return rawPos + (displayIndex - displayPos)
}

function buildTemplateFieldSignature(content: string): string[] {
  const parsed = parseTemplateSections(content)
  return parsed.fields.map((field) => `${field.section ?? ''}::${field.title}`)
}

function inferTemplateIdFromContent(content: string, templates: Template[]): string | null {
  const reportSignature = buildTemplateFieldSignature(content)
  if (reportSignature.length === 0) {
    return null
  }

  let bestTemplateId: string | null = null
  let bestScore = 0

  for (const template of templates) {
    const templateSignature = buildTemplateFieldSignature(template.content)
    if (templateSignature.length === 0) {
      continue
    }

    const matched = reportSignature.filter((token) => templateSignature.includes(token)).length
    const score = matched / Math.max(reportSignature.length, templateSignature.length)

    if (score > bestScore) {
      bestScore = score
      bestTemplateId = template.id
    }
  }

  return bestScore >= 0.5 ? bestTemplateId : null
}

function insertTextAtSelection(
  currentValue: string,
  insertValue: string,
  selectionStart: number | null,
  selectionEnd: number | null,
): string {
  const start = selectionStart ?? currentValue.length
  const end = selectionEnd ?? currentValue.length
  return `${currentValue.slice(0, start)}${insertValue}${currentValue.slice(end)}`
}

function ReportLoggerApp({ context }: { context: IAppContext }) {
  const [reports, setReports] = useState<Report[]>([])
  const [links, setLinks] = useState<TaskReportLink[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [taskSnapshotCache, setTaskSnapshotCache] = useState<TaskSnapshot[]>([])
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null)
  const [hydrated, setHydrated] = useState(false)
  const [syncSource, setSyncSource] = useState<SaveSource>('storage')
  const [navQuery, setNavQuery] = useState('')
  const [createMode, setCreateMode] = useState<CreateMode>('report')
  const [workspaceMode, setWorkspaceMode] = useState<CreateMode>('report')
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit')
  const [templateToApply, setTemplateToApply] = useState('')
  const [templateFields, setTemplateFields] = useState<TemplateField[]>([])
  const [templateDraftName, setTemplateDraftName] = useState('Untitled txt Template')
  const [templateDraftCategory, setTemplateDraftCategory] = useState('general')
  const [templateDraftItems, setTemplateDraftItems] = useState<TemplateDraftItem[]>([])
  const [editorValue, setEditorValue] = useState('')
  const [editorDirty, setEditorDirty] = useState(false)
  const [lastSaveError, setLastSaveError] = useState('')
  const [unresolvedPlaceholders, setUnresolvedPlaceholders] = useState<string[]>([])
  const [conflict, setConflict] = useState<ConflictState>(null)
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null)

  const firstPersistRef = useRef(true)
  const conflictChoiceRef = useRef<ConflictChoice>('manual')
  const reportFieldTextareasRef = useRef<Record<string, HTMLTextAreaElement | null>>({})
  const activeImageTargetRef = useRef<string | null>(null)
  const imagePickerRef = useRef<HTMLInputElement | null>(null)

  const selectedTask = useMemo(
    () => taskSnapshotCache.find((task) => task.id === selectedTaskId) ?? null,
    [taskSnapshotCache, selectedTaskId],
  )

  const selectedReport = useMemo(
    () => reports.find((report) => report.id === selectedReportId) ?? null,
    [reports, selectedReportId],
  )

  const filteredReports = useMemo(() => {
    const query = navQuery.trim().toLowerCase()
    if (!query) {
      return reports
    }

    return reports.filter((report) => {
      const title = report.title.toLowerCase()
      const content = report.content.toLowerCase()
      return title.includes(query) || content.includes(query)
    })
  }, [navQuery, reports])

  const browseFields = useMemo(() => parseTemplateSections(editorValue).fields, [editorValue])

  const resetTemplateDraft = () => {
    setTemplateDraftName('Untitled txt Template')
    setTemplateDraftCategory('general')
    setTemplateDraftItems([])
  }

  const openTemplateBuilder = () => {
    resetTemplateDraft()
    setWorkspaceMode('template')
  }

  const addTemplateDraftItem = () => {
    setTemplateDraftItems((prev) => [
      ...prev,
      {
        id: uid('tpl-item'),
        kind: '###',
        title: '',
        value: '',
      },
    ])
  }

  const updateTemplateDraftItem = (itemId: string, patch: Partial<TemplateDraftItem>) => {
    setTemplateDraftItems((prev) => prev.map((item) => (item.id === itemId ? { ...item, ...patch } : item)))
  }

  const saveTemplateDraft = () => {
    const content = composeTemplateDraft(templateDraftItems)
    const now = Date.now()
    const candidate = {
      id: uid('tpl'),
      name: templateDraftName.trim() || 'Untitled txt Template',
      category: templateDraftCategory.trim() || 'general',
      content,
      createdAt: now,
      updatedAt: now,
      version: DATA_VERSION,
    }

    const parsed = templateSchema.parse(candidate)
    setTemplates((prev) => [parsed, ...prev])
    context.eventBus.emit(CASE_REPORT_TEMPLATE_IMPORTED, {
      templateId: parsed.id,
      name: parsed.name,
      sourcePluginId: PLUGIN_ID,
    })
    resetTemplateDraft()
    setWorkspaceMode('report')
  }

  const cancelTemplateBuilder = () => {
    resetTemplateDraft()
    setWorkspaceMode('report')
  }

  const throttledDraftSave = useMemo(
    () =>
      throttle((nextContent: string, reportId: string) => {
        setReports((prev) =>
          prev.map((report) => {
            if (report.id !== reportId) {
              return report
            }
            const updatedAt = Date.now()
            return {
              ...report,
              content: nextContent,
              updatedAt,
              timeline: [
                ...report.timeline,
                {
                  id: uid('tl'),
                  type: 'updated',
                  message: 'Autosave',
                  at: updatedAt,
                  by: AUTHOR_FALLBACK,
                },
              ],
            }
          }),
        )
        setEditorDirty(false)
      }, 900),
    [],
  )

  useEffect(() => {
    let alive = true
    const restore = async () => {
      try {
        const restored = await restorePayload(context)
        if (!alive) {
          return
        }
        const parsed = payloadSchema.safeParse(restored.payload)
        const safePayload = parsed.success ? parsed.data : defaultPayload()

        setReports(safePayload.reports)
        setLinks(safePayload.taskReportLinks)
        setTemplates(safePayload.templates)
        setTaskSnapshotCache(safePayload.taskSnapshotCache)
        setSyncSource(restored.source)

        if (safePayload.reports.length > 0) {
          setSelectedReportId(safePayload.reports[0].id)
          setEditorValue(safePayload.reports[0].content)
        }

        log.restoreSuccess(safePayload.reports.length + safePayload.taskReportLinks.length, restored.source)
      } catch (error) {
        log.restoreFailed(error)
      } finally {
        if (alive) {
          setHydrated(true)
        }
      }
    }

    restore()

    return () => {
      alive = false
    }
  }, [context])

  useEffect(() => {
    if (!selectedReportId) {
      setEditorValue('')
      setTemplateFields([])
      return
    }
    setEditorValue(selectedReport?.content ?? '')
    setEditorDirty(false)
    setTemplateFields([])
  }, [selectedReportId])

  useEffect(() => {
    if (!hydrated) {
      return
    }
    if (firstPersistRef.current) {
      firstPersistRef.current = false
      return
    }

    const payload: PayloadV1 = {
      version: DATA_VERSION,
      taskReportLinks: links,
      reports,
      templates,
      taskSnapshotCache,
      editorDraft: {
        reportId: selectedReportId,
        content: editorValue,
        autosavePending: editorDirty,
        updatedAt: Date.now(),
      },
      syncMeta: {
        lastSyncAt: Date.now(),
        sourcePlugin: syncSource,
        lastError: lastSaveError,
        retries: 0,
      },
      migrationMeta: {
        version: DATA_VERSION,
        upgrades: [],
      },
    }

    log.saveTriggered(reports.length + links.length)
    savePayload(context, payload).catch((error) => {
      setLastSaveError(String(error))
      log.saveFailed(error)
    })
  }, [
    context,
    editorDirty,
    editorValue,
    hydrated,
    lastSaveError,
    links,
    reports,
    selectedReportId,
    syncSource,
    taskSnapshotCache,
    templates,
  ])

  useEffect(() => {
    if (!hydrated || !selectedReportId) {
      return
    }
    if (!editorDirty) {
      return
    }

    throttledDraftSave(editorValue, selectedReportId)
  }, [editorDirty, editorValue, hydrated, selectedReportId, throttledDraftSave])

  useEffect(() => {
    setLinks((prev) => {
      const taskIds = new Set(taskSnapshotCache.map((task) => task.id))
      return prev.map((link) => ({
        ...link,
        orphaned: !taskIds.has(link.taskId),
      }))
    })
  }, [taskSnapshotCache])

  useEffect(() => {
    const unsubscribers: Array<() => void> = []

    const subscribe = (event: string, handler: (payload: unknown) => void) => {
      const wrapped = (payload: unknown) => handler(payload)
      const maybeOff = (context.eventBus.on as unknown as (
        eventName: string,
        callback: (payload: unknown) => void,
      ) => unknown)(event, wrapped)

      if (typeof maybeOff === 'function') {
        unsubscribers.push(maybeOff as () => void)
        return
      }

      unsubscribers.push(() => {
        context.eventBus.off(event, wrapped as (payload: any) => void)
      })
    }

    subscribe(TASKBOARD_TASK_SELECTED, (payload) => {
      const parsed = taskSelectedEventSchema.safeParse(payload)
      if (!parsed.success) {
        console.warn('[report-logger] rejected invalid event payload', {
          event: TASKBOARD_TASK_SELECTED,
          preview: previewText(payload),
        })
        return
      }
      setSelectedTaskId(parsed.data.taskId)
    })

    subscribe(TASKBOARD_TASK_UPDATED, (payload) => {
      const parsed = taskUpdatedEventSchema.safeParse(payload)
      if (!parsed.success) {
        console.warn('[report-logger] rejected invalid event payload', {
          event: TASKBOARD_TASK_UPDATED,
          preview: previewText(payload),
        })
        return
      }

      const task = parsed.data.task
      log.taskSyncReceived(task.id)
      setTaskSnapshotCache((prev) => {
        const idx = prev.findIndex((item) => item.id === task.id)
        if (idx < 0) {
          return [...prev, task]
        }
        const next = [...prev]
        next[idx] = task
        return next
      })

      setReports((prev) =>
        prev.map((report) => {
          if (report.taskId !== task.id) {
            return report
          }
          const titleChanged = report.taskSnapshot?.title && report.taskSnapshot.title !== task.title
          return {
            ...report,
            taskSnapshot: task,
            taskChanged: Boolean(titleChanged),
            timeline: [
              ...report.timeline,
              {
                id: uid('tl'),
                type: 'sync',
                message: 'Task snapshot updated from TaskBoard',
                at: Date.now(),
                by: 'taskboard',
              },
            ],
          }
        }),
      )
    })

    subscribe(CASE_REPORT_UPDATED, (payload) => {
      const parsed = reportUpdatedEventSchema.safeParse(payload)
      if (!parsed.success) {
        console.warn('[report-logger] rejected invalid event payload', {
          event: CASE_REPORT_UPDATED,
          preview: previewText(payload),
        })
        return
      }

      const report = reports.find((item) => item.id === parsed.data.reportId)
      if (!report) {
        return
      }

      if (parsed.data.sourcePluginId === PLUGIN_ID) {
        return
      }

      if (parsed.data.updatedAt > report.updatedAt && editorDirty) {
        log.conflictDetected(report.id)
        setConflict({
          reportId: report.id,
          externalUpdatedAt: parsed.data.updatedAt,
          localUpdatedAt: report.updatedAt,
        })
      }
    })

    subscribe(CASE_REPORT_LINK_CREATED, (payload) => {
      const parsed = linkCreatedEventSchema.safeParse(payload)
      if (!parsed.success) {
        console.warn('[report-logger] rejected invalid event payload', {
          event: CASE_REPORT_LINK_CREATED,
          preview: previewText(payload),
        })
        return
      }

      if (parsed.data.sourcePluginId === PLUGIN_ID) {
        return
      }

      setLinks((prev) => {
        const exists = prev.some((item) => item.taskId === parsed.data.taskId)
        if (exists) {
          return prev
        }
        return [
          ...prev,
          {
            taskId: parsed.data.taskId,
            reportId: parsed.data.reportId,
            linkedAt: Date.now(),
            linkedBy: 'external',
            sourcePluginId: parsed.data.sourcePluginId,
            orphaned: false,
            history: [],
          },
        ]
      })
    })

    subscribe(CASE_REPORT_TEMPLATE_IMPORTED, (payload) => {
      const parsed = templateImportedEventSchema.safeParse(payload)
      if (!parsed.success) {
        console.warn('[report-logger] rejected invalid event payload', {
          event: CASE_REPORT_TEMPLATE_IMPORTED,
          preview: previewText(payload),
        })
      }
    })

    return () => {
      for (const off of unsubscribers) {
        off()
      }
    }
  }, [context.eventBus, editorDirty, reports])

  const createReport = (templateId?: string) => {
    const linkedTask = selectedTask ?? null
    const selectedTemplate = templateId ? templates.find((item) => item.id === templateId) : null
    const templateApplied = selectedTemplate
      ? resolveTemplate(selectedTemplate.content, linkedTask, AUTHOR_FALLBACK)
      : { text: '', unresolved: [] }
    const reportTitle = selectedTemplate
      ? buildDocumentTitle(selectedTemplate.category, templateApplied.text)
      : linkedTask
        ? `Case Report - ${linkedTask.title}`
        : 'Case Report'

    setUnresolvedPlaceholders(templateApplied.unresolved)

    const reportId = uid('report')
    const now = Date.now()
    const report: Report = {
      id: reportId,
      taskId: linkedTask?.id ?? null,
      templateId: selectedTemplate?.id ?? null,
      title: reportTitle,
      content: templateApplied.text,
      status: 'draft',
      tags: [],
      timeline: [
        {
          id: uid('tl'),
          type: 'created',
          message: 'Report created',
          at: now,
          by: AUTHOR_FALLBACK,
        },
      ],
      updatedAt: now,
      taskSnapshot: linkedTask,
      taskChanged: false,
    }

    setReports((prev) => [report, ...prev])
    setSelectedReportId(reportId)
    setWorkspaceMode('report')
    setViewMode('edit')
    setEditorValue(report.content)

    if (linkedTask) {
      linkReport(linkedTask.id, reportId)
    }

    context.eventBus.emit(TASK_COUNT_CHANGED, { count: reports.length + 1 })
  }

  const linkReport = (taskId: string, reportId: string) => {
    try {
      log.linkCreateStart(taskId, reportId)
      setLinks((prev) => {
        const current = prev.find((item) => item.taskId === taskId)
        const now = Date.now()

        if (!current) {
          const created: TaskReportLink = {
            taskId,
            reportId,
            linkedAt: now,
            linkedBy: AUTHOR_FALLBACK,
            sourcePluginId: PLUGIN_ID,
            orphaned: false,
            history: [],
          }
          return [...prev, created]
        }

        return prev.map((item) => {
          if (item.taskId !== taskId) {
            return item
          }
          return {
            ...item,
            reportId,
            linkedAt: now,
            linkedBy: AUTHOR_FALLBACK,
            orphaned: false,
            history: [
              ...item.history,
              { reportId: item.reportId, linkedAt: item.linkedAt, linkedBy: item.linkedBy },
            ],
          }
        })
      })

      context.eventBus.emit(CASE_REPORT_LINK_CREATED, {
        taskId,
        reportId,
        sourcePluginId: PLUGIN_ID,
      })
      log.linkCreateSuccess(taskId, reportId)
    } catch (error) {
      log.linkCreateFailed(error)
    }
  }

  const applyTemplateToSelectedReport = (templateId: string) => {
    if (!selectedReport) {
      return
    }
    const template = templates.find((item) => item.id === templateId)
    if (!template) {
      return
    }
    const confirmed = window.confirm('Apply template and overwrite current report content?')
    if (!confirmed) {
      return
    }
    const resolved = resolveTemplate(template.content, selectedTask, AUTHOR_FALLBACK)
    const parsed = parseTemplateSections(resolved.text)
    const nextTitle = buildDocumentTitle(template.category, resolved.text, selectedReport.title)

    setTemplateFields(parsed.fields.map((field) => ({ ...field, id: uid('field') })))
    setUnresolvedPlaceholders(resolved.unresolved)
    setEditorValue(resolved.text)
    setEditorDirty(true)
    setReports((prev) =>
      prev.map((report) =>
        report.id === selectedReport.id
          ? { ...report, title: nextTitle, templateId: template.id }
          : report,
      ),
    )
    setTemplateToApply(template.id)
  }

  const enterEditModeForSelectedReport = () => {
    if (!selectedReport) {
      return
    }

    setViewMode('edit')
    setWorkspaceMode('report')

    const parsed = parseTemplateSections(selectedReport.content)
    setTemplateFields(parsed.fields.map((field) => ({ ...field, id: uid('field') })))

    const inferredTemplateId = selectedReport.templateId ?? inferTemplateIdFromContent(selectedReport.content, templates)

    if (inferredTemplateId) {
      setTemplateToApply(inferredTemplateId)
      if (!selectedReport.templateId) {
        setReports((prev) =>
          prev.map((report) =>
            report.id === selectedReport.id
              ? { ...report, templateId: inferredTemplateId }
              : report,
          ),
        )
      }
      return
    }

    setTemplateToApply('')
  }

  const updateTemplateField = (fieldId: string, nextValue: string) => {
    setTemplateFields((prev) => {
      const nextFields = prev.map((field) => {
        if (field.id !== fieldId) {
          return field
        }
        return {
          ...field,
          value: restoreRawValueFromDisplay(field.value, nextValue),
        }
      })
      setEditorValue(composeTemplateSections(nextFields))
      setEditorDirty(true)
      return nextFields
    })
  }

  const openImagePickerForField = (fieldId: string) => {
    activeImageTargetRef.current = fieldId
    imagePickerRef.current?.click()
  }

  const insertImageIntoTargetField = async (
    file: File,
    targetFieldId: string,
    selectionStart: number | null,
    selectionEnd: number | null,
  ) => {
    if (!targetFieldId) {
      return
    }

    const imageDataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(String(reader.result ?? ''))
      reader.onerror = () => reject(reader.error ?? new Error('Failed to read image file'))
      reader.readAsDataURL(file)
    })

    const imageToken = `![${file.name}](${imageDataUrl})`
    const targetTextarea = reportFieldTextareasRef.current[targetFieldId]

    setTemplateFields((prev) => {
      const nextFields = prev.map((field) => {
        if (field.id !== targetFieldId) {
          return field
        }

        const rawSelectionStart = selectionStart === null ? null : mapDisplayIndexToRawIndex(field.value, selectionStart)
        const rawSelectionEnd = selectionEnd === null ? null : mapDisplayIndexToRawIndex(field.value, selectionEnd)

        return {
          ...field,
          value: insertTextAtSelection(field.value, imageToken, rawSelectionStart, rawSelectionEnd),
        }
      })
      setEditorValue(composeTemplateSections(nextFields))
      setEditorDirty(true)
      return nextFields
    })

    if (targetTextarea) {
      window.requestAnimationFrame(() => {
        const nextPosition = Math.min((selectionStart ?? targetTextarea.value.length) + imageToken.length, targetTextarea.value.length + imageToken.length)
        targetTextarea.focus()
        targetTextarea.setSelectionRange(nextPosition, nextPosition)
      })
    }

    activeImageTargetRef.current = null
  }

  const insertImageIntoField = async (file: File) => {
    const targetFieldId = activeImageTargetRef.current
    if (!targetFieldId) {
      return
    }

    const targetTextarea = reportFieldTextareasRef.current[targetFieldId]
    const selectionStart = targetTextarea?.selectionStart ?? null
    const selectionEnd = targetTextarea?.selectionEnd ?? null
    await insertImageIntoTargetField(file, targetFieldId, selectionStart, selectionEnd)
  }

  const handleFieldPasteImage = async (
    fieldId: string,
    event: React.ClipboardEvent<HTMLTextAreaElement>,
  ) => {
    const clipboardFiles = Array.from(event.clipboardData?.files ?? [])
    const imageFile = clipboardFiles.find((file) => file.type.startsWith('image/'))
    if (!imageFile) {
      return
    }

    event.preventDefault()
    await insertImageIntoTargetField(
      imageFile,
      fieldId,
      event.currentTarget.selectionStart,
      event.currentTarget.selectionEnd,
    )
  }

  const exportSelectedReport = () => {
    if (!selectedReport) {
      return
    }

    const blob = new Blob([editorValue], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${selectedReport.title.replace(/\s+/g, '-').toLowerCase()}.txt`
    anchor.click()
    URL.revokeObjectURL(url)
  }

  const commitConflictChoice = (choice: ConflictChoice) => {
    if (!conflict || !selectedReport) {
      return
    }
    conflictChoiceRef.current = choice
    setReports((prev) =>
      prev.map((report) => {
        if (report.id !== conflict.reportId) {
          return report
        }
        const message =
          choice === 'local'
            ? 'Conflict resolved: keep local draft'
            : choice === 'external'
              ? 'Conflict resolved: accept external update'
              : 'Conflict resolved: manual merge'
        return {
          ...report,
          timeline: [
            ...report.timeline,
            {
              id: uid('tl'),
              type: 'decision',
              message,
              at: Date.now(),
              by: AUTHOR_FALLBACK,
            },
          ],
          updatedAt: choice === 'external' ? conflict.externalUpdatedAt : report.updatedAt,
        }
      }),
    )
    setConflict(null)
  }

  const deleteReport = (reportId: string) => {
    const target = reports.find((report) => report.id === reportId)
    const confirmed = window.confirm(`Delete document \"${target?.title ?? 'Untitled'}\"?`)
    if (!confirmed) {
      return
    }

    setReports((prev) => {
      const next = prev.filter((report) => report.id !== reportId)
      if (selectedReportId === reportId) {
        const nextSelected = next[0] ?? null
        setSelectedReportId(nextSelected?.id ?? null)
        setEditorValue(nextSelected?.content ?? '')
        setTemplateFields([])
      }
      return next
    })

    setLinks((prev) => prev.filter((link) => link.reportId !== reportId))
    if (conflict?.reportId === reportId) {
      setConflict(null)
    }

    context.eventBus.emit(TASK_COUNT_CHANGED, { count: Math.max(reports.length - 1, 0) })
  }

  const selectedLink = links.find((link) => link.taskId === selectedTaskId) ?? null

  return (
    <div className="report-logger">
      <input
        ref={imagePickerRef}
        className="rl-hidden-file-input"
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0]
          if (file) {
            await insertImageIntoField(file)
          }
          e.currentTarget.value = ''
        }}
      />
      <div className="rl-shell">
        <aside className="rl-panel rl-sidebar">
          <div className="rl-sidebar-head">
            <h1 className="rl-title">Documents</h1>
          </div>

          <div className="rl-create-controls">
            <select
              className="rl-select rl-create-select"
              value={createMode}
              onChange={(e) => setCreateMode(e.target.value as CreateMode)}
            >
              <option value="report">Create Document</option>
              <option value="template">Create Template</option>
            </select>
            <button
              className="rl-button rl-create-action"
              aria-label={createMode === 'template' ? 'Create template' : 'Create document'}
              title={createMode === 'template' ? 'Create template' : 'Create document'}
              onClick={() => {
                if (createMode === 'template') {
                  openTemplateBuilder()
                  return
                }
                createReport()
              }}
            >
              +
            </button>
          </div>

          <label className="rl-search-wrap" htmlFor="report-search">
            <span className="rl-meta">Search by title/content</span>
            <input
              id="report-search"
              className="rl-input"
              value={navQuery}
              onChange={(e) => setNavQuery(e.target.value)}
              placeholder="Find a document..."
            />
          </label>

          <div className="rl-list rl-doc-nav">
            {filteredReports.map((report) => (
              <div key={report.id} className="rl-item rl-item-card" data-active={report.id === selectedReportId}>
                <button
                  className="rl-item-main"
                  onClick={() => {
                    setSelectedReportId(report.id)
                    setViewMode('preview')
                    setWorkspaceMode('report')
                    setTemplateToApply(report.templateId ?? '')
                    setTemplateFields([])
                  }}
                >
                  <div className="rl-item-title">{report.title}</div>
                  <div className="rl-meta">Updated {formatDate(report.updatedAt)}</div>
                  <div className="rl-meta">{previewText(report.content, 66)}</div>
                </button>
                <button className="rl-item-delete" onClick={() => deleteReport(report.id)}>
                  Delete
                </button>
              </div>
            ))}
            {filteredReports.length === 0 ? (
              <div className="rl-meta">No matching documents.</div>
            ) : null}
          </div>
        </aside>

        <section className="rl-panel rl-workspace">
          {workspaceMode === 'template' ? (
            <>
              <div className="rl-workspace-head">
                <div>
                  <h2 className="rl-section-title">Create Template</h2>
                  <div className="rl-meta">Build a txt template by adding # / ## / ### items.</div>
                </div>
                <div className="rl-form-row">
                  <button className="rl-button secondary" onClick={addTemplateDraftItem}>
                    + Add Item
                  </button>
                  <button className="rl-button secondary" onClick={saveTemplateDraft}>
                    Save Template
                  </button>
                  <button className="rl-button secondary" onClick={cancelTemplateBuilder}>
                    Cancel
                  </button>
                </div>
              </div>

              <div className="rl-form-row rl-template-meta-row">
                <input
                  className="rl-input"
                  value={templateDraftName}
                  onChange={(e) => setTemplateDraftName(e.target.value)}
                  placeholder="Template name"
                />
                <input
                  className="rl-input"
                  value={templateDraftCategory}
                  onChange={(e) => setTemplateDraftCategory(e.target.value)}
                  placeholder="Category"
                />
              </div>

              <div className="rl-form-sheet" aria-label="Template builder">
                {templateDraftItems.length === 0 ? (
                  <div className="rl-empty-state">Click + Add Item to create #, ##, or ### rows.</div>
                ) : (
                  templateDraftItems.map((item, index) => (
                    <div key={item.id} className="rl-form-item">
                      <div className="rl-form-item-head rl-template-draft-head">
                        <span className="rl-form-item-index">{String(index + 1).padStart(2, '0')}.</span>
                        <select
                          className="rl-select rl-template-kind"
                          value={item.kind}
                          onChange={(e) =>
                            updateTemplateDraftItem(item.id, {
                              kind: e.target.value as TemplateKind,
                            })
                          }
                        >
                          <option value="#">#</option>
                          <option value="##">##</option>
                          <option value="###">###</option>
                        </select>
                        <input
                          className="rl-input rl-template-title-input"
                          value={item.title}
                          onChange={(e) => updateTemplateDraftItem(item.id, { title: e.target.value })}
                          placeholder={item.kind === '##' ? 'Section title' : 'Field title'}
                        />
                      </div>
                      {item.kind !== '##' ? (
                        <textarea
                          className="rl-form-item-input rl-template-value-input"
                          value={item.value}
                          onChange={(e) => updateTemplateDraftItem(item.id, { value: e.target.value })}
                          placeholder={item.kind === '#' ? 'Title field content...' : 'Item field content...'}
                        />
                      ) : (
                        <div className="rl-template-kind-note">## is a section header only, no input field.</div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </>
          ) : (
            <>
              <div className="rl-workspace-head">
                <div>
                  <h2 className="rl-section-title">{selectedReport?.title ?? 'Select a document'}</h2>
                  <div className="rl-meta">
                    {selectedReport ? `Updated ${formatDate(selectedReport.updatedAt)}` : 'Pick one file from the left navigation.'}
                  </div>
                </div>
                <div className="rl-form-row">
                  <button
                    className="rl-button secondary"
                    data-active={viewMode === 'edit'}
                    onClick={enterEditModeForSelectedReport}
                  >
                    Edit
                  </button>
                  <button
                    className="rl-button secondary"
                    data-active={viewMode === 'preview'}
                    onClick={() => setViewMode('preview')}
                  >
                    Browse
                  </button>
                  <button className="rl-button secondary" onClick={exportSelectedReport}>
                    Export
                  </button>
                </div>
              </div>

              {selectedReport?.taskChanged ? (
                <div className="rl-warning">Task title changed in TaskBoard. Decide whether to sync report text.</div>
              ) : null}

              {conflict ? (
                <div className="rl-warning">
                  Conflict detected for report {conflict.reportId}. Local: {formatDate(conflict.localUpdatedAt)}; External:{' '}
                  {formatDate(conflict.externalUpdatedAt)}
                  <div className="rl-form-row" style={{ marginTop: 8 }}>
                    <button className="rl-button secondary" onClick={() => commitConflictChoice('local')}>
                      Keep Local
                    </button>
                    <button className="rl-button secondary" onClick={() => commitConflictChoice('external')}>
                      Accept External
                    </button>
                    <button className="rl-button secondary" onClick={() => commitConflictChoice('manual')}>
                      Manual Merge
                    </button>
                  </div>
                </div>
              ) : null}

              {selectedReport ? (
                <>
                  {viewMode === 'edit' ? (
                    <div className="rl-form-row">
                      <select
                        className="rl-select"
                        onChange={(e) => {
                          const nextTemplate = e.target.value
                          setTemplateToApply(nextTemplate)
                          if (nextTemplate) {
                            applyTemplateToSelectedReport(nextTemplate)
                          }
                        }}
                        value={templateToApply}
                      >
                        <option value="">Choose txt template (overwrite current content)</option>
                        {templates.map((template) => (
                          <option key={template.id} value={template.id}>
                            {template.name} [{template.category}]
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}

                  {viewMode === 'edit' && templateFields.length > 0 ? (
                    <div className="rl-form-sheet" role="form" aria-label="Template form fields">
                      {templateFields.map((field, index, arr) => {
                        const prevSection = index > 0 ? arr[index - 1].section : null
                        const showSection = field.section && field.section !== prevSection
                        return (
                          <React.Fragment key={`form-field-${field.id}`}>
                            {showSection && <div className="rl-form-section-title">{field.section}</div>}
                            <div className="rl-form-item">
                              <div className="rl-form-item-head">
                                <span className="rl-form-item-index">{String(index + 1).padStart(2, '0')}.</span>
                                <label htmlFor={`field-${field.id}`} className="rl-form-item-label">
                                  {field.title}
                                </label>
                                <button
                                  type="button"
                                  className="rl-button secondary rl-image-button"
                                  onClick={() => openImagePickerForField(field.id)}
                                >
                                  Image
                                </button>
                              </div>
                              <textarea
                                id={`field-${field.id}`}
                                className="rl-form-item-input"
                                ref={(node) => {
                                  reportFieldTextareasRef.current[field.id] = node
                                }}
                                value={toDisplayValue(field.value)}
                                onChange={(e) => updateTemplateField(field.id, e.target.value)}
                                onPaste={async (e) => {
                                  await handleFieldPasteImage(field.id, e)
                                }}
                                placeholder={`請填寫 ${field.title}...`}
                              />
                              {extractImageTokens(field.value).length > 0 ? (
                                <div className="rl-image-preview-list" aria-label="Image previews">
                                  {extractImageTokens(field.value).map((image, imageIndex) => (
                                    <figure key={`${field.id}-preview-${imageIndex}`} className="rl-image-preview-item">
                                      <button
                                        type="button"
                                        className="rl-image-preview-trigger"
                                        onClick={() => setPreviewImage({ src: image.src, alt: image.alt })}
                                      >
                                        <img src={image.src} alt={image.alt} className="rl-image-preview-thumb" />
                                      </button>
                                    </figure>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          </React.Fragment>
                        )
                      })}
                    </div>
                  ) : null}

                  {viewMode === 'preview' ? (
                    browseFields.length > 0 ? (
                      <div className="rl-form-sheet" aria-label="Template form preview">
                        {browseFields.map((field, index, arr) => {
                          const prevSection = index > 0 ? arr[index - 1].section : null
                          const showSection = field.section && field.section !== prevSection
                          return (
                            <React.Fragment key={`browse-field-${field.title}-${index}`}>
                              {showSection && <div className="rl-form-section-title">{field.section}</div>}
                              <div className="rl-form-item">
                                <div className="rl-form-item-head">
                                  <span className="rl-form-item-index">{String(index + 1).padStart(2, '0')}.</span>
                                  <div className="rl-form-item-label">{field.title}</div>
                                </div>
                                <textarea
                                  className="rl-form-item-input"
                                  value={toDisplayValue(field.value)}
                                  readOnly
                                  tabIndex={-1}
                                />
                                {extractImageTokens(field.value).length > 0 ? (
                                  <div className="rl-image-preview-list" aria-label="Image previews">
                                    {extractImageTokens(field.value).map((image, imageIndex) => (
                                      <figure key={`browse-${field.title}-${imageIndex}`} className="rl-image-preview-item">
                                        <button
                                          type="button"
                                          className="rl-image-preview-trigger"
                                          onClick={() => setPreviewImage({ src: image.src, alt: image.alt })}
                                        >
                                          <img src={image.src} alt={image.alt} className="rl-image-preview-thumb" />
                                        </button>
                                      </figure>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            </React.Fragment>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="rl-empty-state">This document does not use the unified txt template format.</div>
                    )
                  ) : null}

                  {unresolvedPlaceholders.length > 0 ? (
                    <div className="rl-warning">Unresolved placeholders: {unresolvedPlaceholders.join(', ')}</div>
                  ) : null}

                  {viewMode === 'edit' && templateFields.length === 0 ? (
                    <div className="rl-empty-state">
                      This document has no parsed fields yet. Choose a unified txt template with #, ##, and ### headings.
                    </div>
                  ) : null}

                  <div className="rl-footer">
                    <span>Selected report: {selectedReport.id}</span>
                    <span>Autosave: {editorDirty ? 'pending' : 'synced'}</span>
                    <span>Hydrated: {hydrated ? 'yes' : 'no'} / {syncSource}</span>
                    {selectedLink ? <span>Linked: {selectedLink.reportId}</span> : null}
                  </div>
                </>
              ) : (
                <div className="rl-empty-state">Create a new document or choose one from the left.</div>
              )}
            </>
          )}
        </section>
      </div>

      {previewImage ? (
        <div className="rl-image-lightbox" onClick={() => setPreviewImage(null)}>
          <div className="rl-image-lightbox-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="rl-image-lightbox-close"
              onClick={() => setPreviewImage(null)}
              aria-label="Close image preview"
            >
              x
            </button>
            <img src={previewImage.src} alt={previewImage.alt} className="rl-image-lightbox-img" />
          </div>
        </div>
      ) : null}
    </div>
  )
}

let root: Root | null = null
let mountNode: HTMLElement | null = null

const plugin: IPlugin = {
  id: PLUGIN_ID,
  name: 'Report Logger',
  version: DATA_VERSION,
  mount(container, context) {
    if (mountNode) {
      mountNode.remove()
      mountNode = null
    }

    const shellId = `plugin-${PLUGIN_ID}`
    const shell = document.createElement('div')
    shell.id = shellId
    shell.style.minHeight = '100%'
    container.appendChild(shell)

    mountNode = shell
    root = createRoot(shell)
    root.render(React.createElement(ReportLoggerApp, { context }))
  },
  unmount() {
    if (root) {
      root.unmount()
      root = null
    }
    if (mountNode) {
      mountNode.innerHTML = ''
      mountNode.remove()
      mountNode = null
    }
  },
}

export default plugin
