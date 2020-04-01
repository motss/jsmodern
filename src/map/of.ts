import type { PrototypeStruct } from '../index.js';

interface MapOf {
  of<K, V>(...elements: [K, V][]): Map<K, V>;
}

export const of: PrototypeStruct = {
  isStatic: true,
  label: 'of',
  fn: function mapOf<K, V>(...elements: [K, V][]): Map<K, V> {
    try {
      return new Map(elements);
    } catch (_) {
      throw new TypeError(`A Map entry in a list [key, value]`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends MapOf {}
}
