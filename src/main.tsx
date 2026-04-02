import type { IAppContext } from '@toolbox/sdk'
import plugin from './plugin'
import './index.css'

type StoreShape = {
  value: unknown
  version: string
}

const memoryStore = new Map<string, StoreShape>()

const mockContext: IAppContext = {
  storage: {
    async get<T>(key: string): Promise<T | null> {
      if (memoryStore.has(key)) {
        return memoryStore.get(key)?.value as T
      }
      const raw = window.localStorage.getItem(`report-logger:${key}`)
      if (!raw) {
        return null
      }
      try {
        return JSON.parse(raw) as T
      } catch {
        return null
      }
    },
    async save<T>(key: string, data: T, version = '1.0.0'): Promise<void> {
      memoryStore.set(key, { value: data, version })
      window.localStorage.setItem(`report-logger:${key}`, JSON.stringify(data))
    },
  },
  eventBus: {
    emit(event: string, payload: unknown) {
      window.dispatchEvent(new CustomEvent(event, { detail: payload }))
    },
    on(event: string, callback: (payload: unknown) => void) {
      const handler = (evt: Event) => {
        const custom = evt as CustomEvent
        callback(custom.detail)
      }
      window.addEventListener(event, handler)
      return () => window.removeEventListener(event, handler)
    },
    off(event: string, callback: (payload: unknown) => void) {
      window.removeEventListener(event, callback as EventListener)
    },
  },
  theme: 'light',
  runtimeConfig: {},
}

const root = document.getElementById('root')
if (!root) {
  throw new Error('Missing #root container')
}

plugin.mount(root, mockContext)
