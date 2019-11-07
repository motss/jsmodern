interface IsEmpty {
  isEmpty(): boolean;
}

export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function mapIsEmpty<K, V>(): boolean {
    const ctx = this as unknown as Map<K, V>;

    return !ctx.size;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Map<K, V> extends IsEmpty {}
}
