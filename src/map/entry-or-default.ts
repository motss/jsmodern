import { PrototypeStruct } from '..';

export type EntryOrDefaultFn<K, V> = (key: K, defaultValue: V) => [K, V];
export const entryOrDefault: PrototypeStruct = {
  label: 'entryOrDefault',
  fn: function mapEntryOrDefault<K, V>(key: K, defaultValue: V): [K, undefined | V] {
    const ctx = this as unknown as Map<K, V>;
    const val = !ctx.size || !ctx.has(key) ? defaultValue : ctx.get(key);

    return [key, val];
  },
};
