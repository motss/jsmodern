import { PrototypeStruct } from '../index.ts';

interface Iter<T> {
  iter(): IterableIterator<T>;
}

export const iter: PrototypeStruct = {
  label: 'iter',
  fn: function setIter<T>(): IterableIterator<T> {
    const ctx = this as unknown as Set<T>;

    return ctx[Symbol.iterator]();
  },
};

declare global {
  interface Set<T> extends Iter<T> {}
}
