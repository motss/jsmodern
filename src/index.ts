export interface PrototypeStruct<T = (...params: any[]) => any> {
  isStatic?: boolean;
  label: string;
  fn: T;
}

export * from './array.js';
export * from './boolean.js';
export * from './date.js';
export * from './error.js';
export * from './function.js';
export * from './iterator.js';
export * from './map.js';
export * from './number.js';
export * from './object.js';
export * from './promise.js';
export * from './regexp.js';
export * from './set.js';
export * from './string.js';
export * from './symbol.js';
export * from './weak-map.js';
export * from './weak-set.js';

export * from './extend.js';
