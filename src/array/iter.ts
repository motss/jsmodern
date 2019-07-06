import { PrototypeStruct } from '..';

export type IterFn<T> = () => IterableIterator<T>;
export const iter: PrototypeStruct = {
  label: 'iter',
  fn: function arrayIter<T>(): IterableIterator<T> {
    const ctx = this as unknown as T[];

    return ctx[Symbol.iterator]();
  },
};
