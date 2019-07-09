import { PrototypeStruct } from '..';

type FromMapFn<K, V> = (n: [K, V]) => [K, V];
export interface MapFrom {
  from<K, V>(mapEntries: [K, V][], mapFn?: FromMapFn<K, V>): Map<K, V>;
}
export type FromFn<K, V> = (mapEntries: [K, V][], mapFn?: FromMapFn<K, V>) => Map<K, V>;
export const from: PrototypeStruct = {
  label: 'from',
  fn: function mapFrom<K, V>(mapEntries: [K, V][], mapFn?: FromMapFn<K, V>): Map<K, V> {
    if (!Array.isArray(mapEntries)) {
      // tslint:disable-next-line: max-line-length
      throw new TypeError(`Invalid map entries. Each map entry in a list must be an array of key/ value pairs.`);
    }

    const entries = 'function' === typeof(mapFn) ? mapEntries.map(mapFn) : mapEntries;

    return new Map(entries);
  },
};
