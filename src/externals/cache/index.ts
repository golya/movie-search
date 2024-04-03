
export interface CacheType {
  set: (key: string, value: string | number) => Promise<string | boolean>
  get: (key: string, defaultValue?: string | number) => Promise<string | number | null>
  increment: (key: string, amount: number) => Promise<void>
  reset: () => Promise<void>
}
