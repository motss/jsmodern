import { PrototypeStruct } from '..';

export type ToArrayFn<K, V> = () => [K, V][];
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
  interface Map<K, V> {
    toArray: ToArrayFn<K, V>;
  }
}
