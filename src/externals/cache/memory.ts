import _ from 'lodash';
import { CacheType } from './index';

let cache = {};

async function get (key: string, defaultValue?: string | number) {
  const result = _.get(cache, key)

  if (!result && defaultValue !== undefined) {
    return defaultValue
  }

  if (!result) {
    return false
  }

  return result;
}

async function set (key: string, value: string | number) {
  _.set(cache, key, value);
  return true
}

async function increment (key: string, amount: number) {
  const current = _.get(cache, key) ?? 0;
  _.set(cache, key, current + amount);
}

async function reset () {
  cache = {}
}

export const memoryCacheService = (): CacheType => {
  return Object.freeze({
    set,
    get,
    increment,
    reset
  })
}