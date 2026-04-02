export function uid(prefix: string): string {
  const rnd = Math.random().toString(36).slice(2, 8)
  return `${prefix}-${Date.now()}-${rnd}`
}

export function previewText(value: unknown, len = 120): string {
  if (value === null || value === undefined) {
    return ''
  }
  const raw = typeof value === 'string' ? value : JSON.stringify(value)
  return raw.length > len ? `${raw.slice(0, len)}...` : raw
}

export function safeJsonParse(value: string): unknown {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString()
}

export function throttle<T extends (...args: any[]) => void>(fn: T, waitMs: number): T {
  let timer: number | null = null
  let lastArgs: Parameters<T> | null = null

  const flush = () => {
    if (lastArgs) {
      fn(...lastArgs)
      lastArgs = null
    }
    timer = null
  }

  return ((...args: Parameters<T>) => {
    lastArgs = args
    if (timer !== null) {
      return
    }
    timer = window.setTimeout(flush, waitMs)
  }) as T
}
