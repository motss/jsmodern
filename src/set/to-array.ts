import { PrototypeStruct } from '..';

interface ToArray<T> {
  toArray(): T[];
}

export const toArray: PrototypeStruct = {
  label: 'toArray',
  fn: function setToArray<T>(): T[] {
    const ctx = this as unknown as Set<T>;

    if (!ctx.size) return [];

    const list = [];
    for (const n of ctx) list.push(n);

    return list;
  },
};

declare global {
  interface Set<T> extends ToArray<T> {}
}
