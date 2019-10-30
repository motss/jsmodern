// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface GetOrDefault<K, V> {
  getOrDefault(key: K, defaultValue: V): V;
}

export const getOrDefault: PrototypeStruct = {
  label: 'getOrDefault',
  fn: function mapGetOrDefault<K, V>(key: K, defaultValue: V): undefined | V {
    const ctx = this as unknown as Map<K, V>;

    return (!ctx.size || !ctx.has(key)) ? defaultValue : ctx.get(key);
  },
};

declare global {
  interface Map<K, V> extends GetOrDefault<K, V> {}
}
