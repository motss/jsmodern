import { PrototypeStruct } from '..';

export interface MapOf {
  of<K, V>(...elemnts: [K, V][]): Map<K, V>;
}
export type OfFn<K, V> = (...elements: [K, V][]) => Map<K, V>;
export const of: PrototypeStruct = {
  label: 'of',
  fn: function mapOf<K, V>(...elements: [K, V][]): Map<K, V> {
    try {
      return new Map(elements);
    } catch (_) {
      throw new TypeError(`A map entry must contain key/ value pairs`);
    }
  },
};
