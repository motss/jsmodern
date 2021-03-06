import type { PrototypeStruct } from '../index.js';

interface LastIndex {
  lastIndex(): number;
}

export const lastIndex: PrototypeStruct = {
  label: 'lastIndex',
  fn: function arrayLastIndex<T>(): number {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    return !len ? 0 : len - 1;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends LastIndex {}
}
