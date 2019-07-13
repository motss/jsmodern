import { PrototypeStruct } from '..';

type FromSetFn<K, V> = (n: [K, V]) => [K, V];
export interface MapFrom {
  from<K, V>(mapEntries: [K, V][], mapFn?: FromSetFn<K, V>): Map<K, V>;
}
export type FromFn<K, V> = (mapEntries: [K, V][], mapFn?: FromSetFn<K, V>) => Map<K, V>;
export const from: PrototypeStruct = {
  isStatic: true,
  label: 'from',
  fn: function setFrom<K, V>(mapEntries: [K, V][], mapFn?: FromSetFn<K, V>): Map<K, V> {
    if (!Array.isArray(mapEntries)) {
      // tslint:disable-next-line: max-line-length
      throw new TypeError(`Invalid map entries. Each map entry in a list must be an array of key/ value pairs.`);
    }

    const entries = 'function' === typeof(mapFn) ? mapEntries.map(mapFn) : mapEntries;

    return new Map(entries);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends MapFrom {}
}
