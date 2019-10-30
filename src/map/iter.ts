// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface Iter<K, V> {
  iter(): IterableIterator<[K, V]>;
}

export const iter: PrototypeStruct = {
  label: 'iter',
  fn: function mapIter<K, V>(): IterableIterator<[K, V]> {
    const ctx = this as unknown as Map<K, V>;

    return ctx[Symbol.iterator]();
  },
};

declare global {
  interface Map<K, V> extends Iter<K, V> {}
}
