import type { PrototypeStruct } from '../index.js';

type MapFn<T> = (n: T) => T;
export interface SetFrom {
  from<T>(setEntry: T[], mapFn?: MapFn<T>): Set<T>;
}

export const from: PrototypeStruct = {
  isStatic: true,
  label: 'from',
  fn: function setFrom<T>(setEntry: T[], mapFn?: MapFn<T>): Set<T> {
    if (!Array.isArray(setEntry)) {
      throw new TypeError(`Expect an array of Set elements`);
    }

    const entries = 'function' === typeof(mapFn) ? setEntry.map(mapFn) : setEntry;

    return new Set(entries);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface SetConstructor extends SetFrom {}
}
