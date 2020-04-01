import type { PrototypeStruct } from '../index.js';

interface LastIndex {
  lastIndex(): number;
}

export const lastIndex: PrototypeStruct = {
  label: 'lastIndex',
  fn: function stringLastIndex(): number {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    return !len ? 0 : len - 1;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends LastIndex {}
}
