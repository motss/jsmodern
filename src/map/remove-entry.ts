interface RemoveEntry<K, V> {
  removeEntry(key: K): [K, V];
}

export const removeEntry: PrototypeStruct = {
  label: 'removeEntry',
  fn: function mapRemoveEntry<K, V>(key: K): [] | [K, undefined | V] {
    const ctx = this as unknown as Map<K, V>;
    const val = !ctx.size ? undefined : ctx.get(key);

    ctx.delete(key);

    return [key, val];
  },
};

declare global {
  interface Map<K, V> extends RemoveEntry<K, V> {}
}
