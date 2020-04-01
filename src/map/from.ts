import type { PrototypeStruct } from '../index.js';

type MapFn<K, V> = (n: [K, V]) => [K, V];
interface MapFrom {
  from<K, V>(mapEntries: [K, V][], mapFn?: MapFn<K, V>): Map<K, V>;
}

export const from: PrototypeStruct = {
  isStatic: true,
  label: 'from',
  fn: function mapFrom<K, V>(mapEntries: [K, V][], mapFn?: MapFn<K, V>): Map<K, V> {
    if (!Array.isArray(mapEntries)) {
      // tslint:disable-next-line: max-line-length
      throw new TypeError(`Invalid Map entries. Each Map entry in a list [key, value]`);
    }

    const entries = 'function' === typeof(mapFn) ? mapEntries.map(mapFn) : mapEntries;

    return new Map(entries);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends MapFrom {}
}
