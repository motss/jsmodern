import { PrototypeStruct } from '../index.js';

interface IsEmpty {
  isEmpty(): boolean;
}

export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function arrayIsEmpty<T>(): boolean {
    const ctx = this as unknown as T[];

    return !(ctx.length);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends IsEmpty {}
}
