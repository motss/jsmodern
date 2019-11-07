import { PrototypeStruct } from '../index.js';

interface IsEmpty {
  isEmpty(): boolean;
}

export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function setIsEmpty<T>(): boolean {
    const ctx = this as unknown as Set<T>;

    return !ctx.size;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Set<T> extends IsEmpty {}
}
