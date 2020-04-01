import type { PrototypeStruct } from '../index.js';

interface Len {
  len(): number;
}

export const len: PrototypeStruct = {
  label: 'len',
  fn: function setLen<T>(): number {
    const ctx = this as unknown as Set<T>;

    return ctx.size;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Set<T> extends Len {}
}
