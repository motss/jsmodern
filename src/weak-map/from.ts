import { PrototypeStruct } from '../index.js';

type MapFn<K, V> = (n: [K, V]) => [K, V];
interface WeakMapFrom {
  from<K extends object, V>(mapEntries: [K, V][], mapFn?: MapFn<K, V>): WeakMap<K, V>;
}

export const from: PrototypeStruct = {
  isStatic: true,
  label: 'from',
  fn: function weakMapFrom<
    K extends object,
    V
  >(mapEntries: [K, V][], mapFn?: MapFn<K, V>): WeakMap<K, V> {
    if (!Array.isArray(mapEntries)) {
      // tslint:disable-next-line: max-line-length
      throw new TypeError(`Invalid WeakMap entries. Each WeakMap entry must contain [key, value] where key must be an object`);
    }

    try {
      const entries = 'function' === typeof(mapFn) ? mapEntries.map(mapFn) : mapEntries;

      return new WeakMap(entries);
    } catch (_) {
      throw new TypeError(`WeakMap key must be an object`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakMapConstructor extends WeakMapFrom {}
}
