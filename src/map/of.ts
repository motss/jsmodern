import { PrototypeStruct } from '..';

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
      throw new TypeError(`A map entry must contain key-value pairs`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends MapOf {}
}
