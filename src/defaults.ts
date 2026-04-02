import { DATA_VERSION, type PayloadV1 } from './schemas'

const now = Date.now()

export const builtInTemplates = [
  {
    id: 'tpl-daily-progress',
    name: 'Daily Progress',
    category: 'progress',
    content: [
      '# Case Report - {{task.title}}',
      '',
      '- Task ID: {{task.id}}',
      '- Date: {{today}}',
      '- Author: {{author}}',
      '',
      '## Summary',
      '- What was completed:',
      '- Current blockers:',
      '',
      '## Next Action',
      '- ',
    ].join('\n'),
    createdAt: now,
    updatedAt: now,
    version: DATA_VERSION,
  },
  {
    id: 'tpl-incident-investigation',
    name: 'Incident Investigation',
    category: 'incident',
    content: [
      '# Incident Report - {{task.title}}',
      '',
      '- Task: {{task.id}}',
      '- Owner: {{author}}',
      '- Date: {{today}}',
      '',
      '## Impact',
      '- Scope:',
      '- Severity:',
      '',
      '## Timeline',
      '- T0:',
      '- T1:',
      '',
      '## Root Cause',
      '- ',
      '',
      '## Recovery Plan',
      '- ',
    ].join('\n'),
    createdAt: now,
    updatedAt: now,
    version: DATA_VERSION,
  },
] as const

export function defaultPayload(): PayloadV1 {
  return {
    version: DATA_VERSION,
    taskReportLinks: [],
    reports: [],
    templates: [...builtInTemplates],
    taskSnapshotCache: [],
    editorDraft: {
      reportId: null,
      content: '',
      autosavePending: false,
      updatedAt: 0,
    },
    syncMeta: {
      lastSyncAt: 0,
      sourcePlugin: '',
      lastError: '',
      retries: 0,
    },
    migrationMeta: {
      version: DATA_VERSION,
      upgrades: [],
    },
  }
}
