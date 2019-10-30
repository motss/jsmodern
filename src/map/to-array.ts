// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface ToArray<K, V> {
  toArray(): [K, V][];
}

export const toArray: PrototypeStruct = {
  label: 'toArray',
  fn: function mapToArray<K, V>(): [K, V][] {
    const ctx = this as unknown as Map<K, V>;

    if (!ctx.size) return [];

    const list = [];
    for (const n of ctx) list.push(n);

    return list;
  },
};

declare global {
  interface Map<K, V> extends ToArray<K, V> {}
}
