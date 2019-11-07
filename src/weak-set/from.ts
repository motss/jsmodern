import { PrototypeStruct } from '../index.js';

interface WeakSetFrom {
  from<K extends object>(mapEntries: K[]): WeakSet<K>;
}

export const from: PrototypeStruct = {
  isStatic: true,
  label: 'from',
  fn: function weakSetFrom<K extends object>(mapEntries: K[]): WeakSet<K> {
    if (!Array.isArray(mapEntries)) {
      // tslint:disable-next-line: max-line-length
      throw new TypeError(`Invalid WeakSet entries. Each WeakSet entry key must be an object`);
    }

    try {
      return new WeakSet(mapEntries);
    } catch (_) {
      throw new TypeError(`WeakSet key must be an object`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakSetConstructor extends WeakSetFrom {}
}
