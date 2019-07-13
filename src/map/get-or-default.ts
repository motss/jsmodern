import { PrototypeStruct } from '..';

export type GetOrDefaultFn<K, V> = (key: K, defaultValue: V) => V;
export const getOrDefault: PrototypeStruct = {
  label: 'getOrDefault',
  fn: function mapGetOrDefault<K, V>(key: K, defaultValue: V): undefined | V {
    const ctx = this as unknown as Map<K, V>;

    return (!ctx.size || !ctx.has(key)) ? defaultValue : ctx.get(key);
  },
};

declare global {
  interface Map<K, V> {
    getOrDefault: GetOrDefaultFn<K, V>;
  }
}
