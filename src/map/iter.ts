import { PrototypeStruct } from '..';

export type IterFn<K, V> = () => IterableIterator<[K, V]>;
export const iter: PrototypeStruct = {
  label: 'iter',
  fn: function mapIter<K, V>(): IterableIterator<[K, V]> {
    const ctx = this as unknown as Map<K, V>;

    return ctx[Symbol.iterator]();
  },
};
