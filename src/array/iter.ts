import { PrototypeStruct } from '../index.ts';

interface Iter<T> {
  iter(): IterableIterator<T>;
}

export const iter: PrototypeStruct = {
  label: 'iter',
  fn: function arrayIter<T>(): IterableIterator<T> {
    const ctx = this as unknown as T[];

    return ctx[Symbol.iterator]();
  },
};

declare global {
  interface Array<T> extends Iter<T> {}
}
