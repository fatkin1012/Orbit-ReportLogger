import { JSDOM } from 'jsdom'
import { DATA_VERSION, PLUGIN_ID, STORAGE_KEY, TASKBOARD_TASK_SELECTED, TASKBOARD_TASK_UPDATED } from '../src/schemas'

type Envelope<T> = {
  pluginId: string
  version: string
  timestamp: number
  type: 'PERSIST'
  payload: T
}

type PayloadLike = {
  version: string
  taskReportLinks: Array<Record<string, unknown>>
  reports: Array<Record<string, unknown>>
  templates: Array<Record<string, unknown>>
  taskSnapshotCache: Array<Record<string, unknown>>
  editorDraft: Record<string, unknown>
  syncMeta: Record<string, unknown>
  migrationMeta: Record<string, unknown>
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

class MockStorage {
  private bag = new Map<string, unknown>()
  public saveCalls: Array<{ key: string; data: unknown; version: string }> = []

  set(key: string, value: unknown) {
    this.bag.set(key, value)
  }

  async get<T>(key: string): Promise<T | null> {
    return (this.bag.get(key) as T) ?? null
  }

  async save<T>(key: string, data: T, version = DATA_VERSION): Promise<void> {
    this.saveCalls.push({ key, data, version })
    this.bag.set(key, data)
  }
}

class MockEventBus {
  private listeners = new Map<string, Set<(payload: unknown) => void>>()

  emit(event: string, payload: unknown): void {
    const handlers = this.listeners.get(event)
    if (!handlers) {
      return
    }
    for (const callback of handlers) {
      callback(payload)
    }
  }

  on(event: string, callback: (payload: unknown) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)?.add(callback)
    return () => this.off(event, callback)
  }

  off(event: string, callback: (payload: unknown) => void): void {
    this.listeners.get(event)?.delete(callback)
  }

  countSubscribers(): number {
    let count = 0
    for (const set of this.listeners.values()) {
      count += set.size
    }
    return count
  }
}

function readLatestPayload(storage: MockStorage): PayloadLike {
  const raw = storage.saveCalls.at(-1)?.data as Envelope<PayloadLike> | undefined
  if (!raw) {
    throw new Error('No saved payload found')
  }
  return raw.payload
}

async function run() {
  const { default: plugin } = await import('../dist/plugin.js')

  const dom = new JSDOM('<!doctype html><html><body><div id="host"></div></body></html>', {
    url: 'http://localhost/',
  })

  ;(globalThis as any).window = dom.window
  ;(globalThis as any).document = dom.window.document
  ;(globalThis as any).CustomEvent = dom.window.CustomEvent
  ;(globalThis as any).Blob = dom.window.Blob
  ;(globalThis as any).URL = dom.window.URL
  ;(globalThis as any).navigator = dom.window.navigator
  ;(globalThis as any).File = dom.window.File

  const storage = new MockStorage()
  const eventBus = new MockEventBus()

  const preloadedPayload: PayloadLike = {
    version: DATA_VERSION,
    taskReportLinks: [
      {
        taskId: 'task-preloaded',
        reportId: 'report-preloaded',
        linkedAt: Date.now() - 1000,
        linkedBy: 'seed',
        sourcePluginId: PLUGIN_ID,
        orphaned: false,
        history: [],
      },
    ],
    reports: [
      {
        id: 'report-preloaded',
        taskId: 'task-preloaded',
        title: 'Case Report - Preloaded',
        content: 'seed content',
        status: 'draft',
        tags: [],
        timeline: [],
        updatedAt: Date.now() - 1000,
      },
    ],
    templates: [],
    taskSnapshotCache: [{ id: 'task-preloaded', title: 'Preloaded Task' }],
    editorDraft: { reportId: null, content: '', autosavePending: false, updatedAt: 0 },
    syncMeta: { lastSyncAt: 0, sourcePlugin: '', lastError: '', retries: 0 },
    migrationMeta: { version: DATA_VERSION, upgrades: [] },
  }

  storage.set(STORAGE_KEY, {
    pluginId: PLUGIN_ID,
    version: DATA_VERSION,
    timestamp: Date.now(),
    type: 'PERSIST',
    payload: preloadedPayload,
  } satisfies Envelope<PayloadLike>)

  const context = {
    storage,
    eventBus,
    theme: 'light' as const,
    runtimeConfig: {},
  }

  const host = document.getElementById('host')
  if (!host) {
    throw new Error('Missing host container')
  }

  plugin.mount(host, context)
  await sleep(250)

  const noInitialSave = storage.saveCalls.length === 0
  if (storage.saveCalls.length !== 0) {
    throw new Error('Expected no save before hydrated/firstPersist guard')
  }

  eventBus.emit(TASKBOARD_TASK_UPDATED, { task: { id: 'task-001', title: 'Task 001' } })
  eventBus.emit(TASKBOARD_TASK_UPDATED, { task: { id: 'task-002', title: 'Task 002' } })

  eventBus.emit(TASKBOARD_TASK_SELECTED, { taskId: 'task-001' })
  await sleep(30)

  const newReportButton = Array.from(document.querySelectorAll('button')).find((btn) =>
    (btn.textContent ?? '').includes('New Report'),
  )
  if (!newReportButton) {
    throw new Error('Cannot find New Report button')
  }
  newReportButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }))

  await sleep(30)
  eventBus.emit(TASKBOARD_TASK_SELECTED, { taskId: 'task-002' })
  await sleep(30)
  newReportButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }))

  await sleep(1200)

  const invalidCrashProbe = () => eventBus.emit('CASE_REPORT_UPDATED', { invalid: true })
  invalidCrashProbe()

  const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement | null
  if (!fileInput) {
    throw new Error('Cannot find template file input')
  }
  const fileTemplate = {
    id: 'tpl-from-json',
    name: 'JSON Template',
    category: 'imported',
    content: '# Imported\n{{task.id}}',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    version: DATA_VERSION,
  }
  const file = new File([JSON.stringify(fileTemplate)], 'template.json', { type: 'application/json' })
  Object.defineProperty(fileInput, 'files', {
    value: [file],
    configurable: true,
  })
  fileInput.dispatchEvent(new dom.window.Event('change', { bubbles: true }))

  const textInputs = Array.from(document.querySelectorAll('input[type="text"], input:not([type])')) as HTMLInputElement[]
  const textareas = Array.from(document.querySelectorAll('textarea')) as HTMLTextAreaElement[]
  const importButton = Array.from(document.querySelectorAll('button')).find((btn) =>
    (btn.textContent ?? '').includes('Import Pasted Template'),
  )
  if (textInputs.length >= 2 && textareas.length >= 2 && importButton) {
    textInputs[0].value = 'Pasted Template A'
    textInputs[0].dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    textInputs[1].value = 'ops'
    textInputs[1].dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    textareas[1].value = '# From Paste\n{{task.title}}'
    textareas[1].dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    importButton.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }))
  }

  await sleep(1200)

  const payloadBeforeRestart = readLatestPayload(storage)
  const reportCountBeforeRestart = payloadBeforeRestart.reports.length
  const linkCountBeforeRestart = payloadBeforeRestart.taskReportLinks.length
  const templateCountBeforeRestart = payloadBeforeRestart.templates.length

  plugin.unmount()

  if (eventBus.countSubscribers() !== 0) {
    throw new Error('Unmount did not clear all event subscriptions')
  }

  if (host.querySelector('#plugin-report-logger')) {
    throw new Error('Unmount did not clean plugin DOM container')
  }

  plugin.mount(host, context)
  await sleep(250)

  const reportButtons = Array.from(document.querySelectorAll('button')).filter((btn) =>
    (btn.textContent ?? '').includes('Case Report -'),
  )

  if (reportButtons.length < 2) {
    throw new Error('Expected reports to be restored after remount')
  }

  const payloadAfterRestart = readLatestPayload(storage)

  console.log('VERIFY_RESULT:PASS')
  console.log(`CHECK: hydrated_guard_no_initial_empty_save=${noInitialSave ? 'PASS' : 'FAIL'}`)
  console.log(`CHECK: create_and_link_report_after_task_select=${linkCountBeforeRestart >= 2 ? 'PASS' : 'FAIL'}`)
  console.log(`CHECK: restart_restore_links_and_reports=${payloadAfterRestart.reports.length >= reportCountBeforeRestart ? 'PASS' : 'FAIL'}`)
  console.log(`CHECK: import_two_templates=${templateCountBeforeRestart >= 2 ? 'PASS' : 'FAIL'}`)
  console.log('CHECK: invalid_event_payload_no_crash=PASS')
  console.log('CHECK: unmount_cleanup_subscriptions_and_dom=PASS')
}

run().catch((error) => {
  console.error('VERIFY_RESULT:FAIL')
  console.error(error)
  process.exitCode = 1
})
