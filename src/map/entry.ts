import { PrototypeStruct } from '..';

export type EntryFn<K, V> = (key: K) => [K, V];
export const entry: PrototypeStruct = {
  label: 'entry',
  fn: function mapEntry<K, V>(key: K): [] | [K, undefined | V] {
    const ctx = this as unknown as Map<K, V>;
    const val = !ctx.size ? undefined : ctx.get(key);

    return [key, val];
  },
};
