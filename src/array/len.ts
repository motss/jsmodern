import { PrototypeStruct } from '../index.ts';

interface Len {
  len(): number;
}

export const len: PrototypeStruct = {
  label: 'len',
  fn: function arrayLen<T>(): number {
    const ctx = this as unknown as T[];

    return ctx.length;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends Len {}
}
