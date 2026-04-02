import { z } from 'zod'

export const STORAGE_KEY = 'tasks'
export const DATA_VERSION = '1.1.0'
export const PLUGIN_ID = 'report-logger'

export const TASKBOARD_TASK_SELECTED = 'TASKBOARD_TASK_SELECTED'
export const TASKBOARD_TASK_UPDATED = 'TASKBOARD_TASK_UPDATED'
export const CASE_REPORT_LINK_CREATED = 'CASE_REPORT_LINK_CREATED'
export const CASE_REPORT_UPDATED = 'CASE_REPORT_UPDATED'
export const CASE_REPORT_TEMPLATE_IMPORTED = 'CASE_REPORT_TEMPLATE_IMPORTED'
export const TASK_COUNT_CHANGED = 'TASK_COUNT_CHANGED'

export const taskSnapshotSchema = z.object({
  id: z.string().min(1),
  title: z.string().default('Untitled task'),
  status: z.string().optional(),
  assignee: z.string().optional(),
  updatedAt: z.number().optional(),
})

export const timelineEntrySchema = z.object({
  id: z.string().min(1),
  type: z.enum(['created', 'updated', 'linked', 'rebound', 'conflict', 'decision', 'sync']),
  message: z.string().min(1),
  at: z.number(),
  by: z.string().default('system'),
})

export const reportSchema = z.object({
  id: z.string().min(1),
  taskId: z.string().nullable().optional(),
  title: z.string().min(1),
  content: z.string().default(''),
  status: z.enum(['draft', 'active', 'blocked', 'closed']).default('draft'),
  tags: z.array(z.string()).default([]),
  timeline: z.array(timelineEntrySchema).default([]),
  updatedAt: z.number(),
  taskSnapshot: taskSnapshotSchema.nullable().optional(),
  taskChanged: z.boolean().optional(),
})

export const taskReportLinkSchema = z.object({
  taskId: z.string().min(1),
  reportId: z.string().min(1),
  linkedAt: z.number(),
  linkedBy: z.string().default('anonymous'),
  sourcePluginId: z.string().default(PLUGIN_ID),
  orphaned: z.boolean().default(false),
  history: z
    .array(
      z.object({
        reportId: z.string().min(1),
        linkedAt: z.number(),
        linkedBy: z.string(),
      }),
    )
    .default([]),
})

export const templateSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  category: z.string().default('general'),
  content: z.string().min(1),
  createdAt: z.number(),
  updatedAt: z.number(),
  version: z.string().min(1),
})

export const editorDraftSchema = z.object({
  reportId: z.string().nullable().default(null),
  content: z.string().default(''),
  autosavePending: z.boolean().default(false),
  updatedAt: z.number().default(0),
})

export const syncMetaSchema = z.object({
  lastSyncAt: z.number().default(0),
  sourcePlugin: z.string().default(''),
  lastError: z.string().default(''),
  retries: z.number().int().nonnegative().default(0),
})

export const migrationMetaSchema = z.object({
  version: z.literal(DATA_VERSION),
  upgrades: z.array(z.object({ from: z.string(), to: z.string(), at: z.number() })).default([]),
})

export const payloadSchema = z.object({
  version: z.literal(DATA_VERSION),
  taskReportLinks: z.array(taskReportLinkSchema).default([]),
  reports: z.array(reportSchema).default([]),
  templates: z.array(templateSchema).default([]),
  taskSnapshotCache: z.array(taskSnapshotSchema).default([]),
  editorDraft: editorDraftSchema.default({
    reportId: null,
    content: '',
    autosavePending: false,
    updatedAt: 0,
  }),
  syncMeta: syncMetaSchema.default({
    lastSyncAt: 0,
    sourcePlugin: '',
    lastError: '',
    retries: 0,
  }),
  migrationMeta: migrationMetaSchema.default({ version: DATA_VERSION, upgrades: [] }),
})

export const taskSelectedEventSchema = z.object({
  taskId: z.string().min(1),
})

export const taskUpdatedEventSchema = z.object({
  task: taskSnapshotSchema,
})

export const reportUpdatedEventSchema = z.object({
  reportId: z.string().min(1),
  updatedAt: z.number(),
  sourcePluginId: z.string().default(PLUGIN_ID),
})

export const linkCreatedEventSchema = z.object({
  taskId: z.string().min(1),
  reportId: z.string().min(1),
  sourcePluginId: z.string().default(PLUGIN_ID),
})

export const templateImportedEventSchema = z.object({
  templateId: z.string().min(1),
  name: z.string().min(1),
  sourcePluginId: z.string().default(PLUGIN_ID),
})

export type TaskSnapshot = z.infer<typeof taskSnapshotSchema>
export type TimelineEntry = z.infer<typeof timelineEntrySchema>
export type Report = z.infer<typeof reportSchema>
export type TaskReportLink = z.infer<typeof taskReportLinkSchema>
export type Template = z.infer<typeof templateSchema>
export type EditorDraft = z.infer<typeof editorDraftSchema>
export type SyncMeta = z.infer<typeof syncMetaSchema>
export type MigrationMeta = z.infer<typeof migrationMetaSchema>
export type PayloadV1 = z.infer<typeof payloadSchema>
export type TaskSelectedEvent = z.infer<typeof taskSelectedEventSchema>
export type TaskUpdatedEvent = z.infer<typeof taskUpdatedEventSchema>
export type ReportUpdatedEvent = z.infer<typeof reportUpdatedEventSchema>
export type LinkCreatedEvent = z.infer<typeof linkCreatedEventSchema>
export type TemplateImportedEvent = z.infer<typeof templateImportedEventSchema>
