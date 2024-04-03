import Redis from 'ioredis';
import { CacheType } from './index';


export const redisCacheService = (): CacheType => {
  const redis = new Redis();

  async function get (key: string, defaultValue?: string | number): Promise<string | number | null> {
    const result = await redis.get(key);

    if (!result && defaultValue !== undefined) {
      return defaultValue
    }
    return result;
  }

  async function set (key: string, value: string | number, expire = 60 * 2) {
    const result = await redis.set(key, value, 'EX', expire);
    return result;
  }

  async function increment (key: string, amount: number) {
    await redis.incrby(key, amount);
  }

  async function reset () {
    await redis.flushall();
  }

  return Object.freeze({
    set,
    get,
    increment,
    reset
  })
}
