interface WeakMapOf {
  of<K extends object, V>(...elements: [K, V][]): WeakMap<K, V>;
}

export const of: PrototypeStruct = {
  isStatic: true,
  label: 'of',
  fn: function weakMapOf<K extends object, V>(...elements: [K, V][]): WeakMap<K, V> {
    try {
      return new WeakMap(elements);
    } catch (_) {
      throw new TypeError(`A WeakMap entry must contain [key, value] where key must be an object`);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakMapConstructor extends WeakMapOf {}
}
