import { PrototypeStruct } from '../index.ts';

interface WeakSetOf {
  of<K extends object>(...elements: K[]): WeakSet<K>;
}

export const of: PrototypeStruct = {
  isStatic: true,
  label: 'of',
  fn: function weakSetOf<K extends object>(...elements: K[]): WeakSet<K> {
    try {
      return new WeakSet(elements);
    } catch (_) {
      throw new TypeError(`WeakSet key must be an object`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakSetConstructor extends WeakSetOf {}
}
