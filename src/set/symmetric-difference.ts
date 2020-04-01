import type { PrototypeStruct } from '../index.js';
import { utilIsSet } from './is-set.js';

interface SymmetricDifference<T> {
  symmetricDifference(other: Set<T>): T[];
}

export const symmetricDifference: PrototypeStruct = {
  label: 'symmetricDifference',
  fn: function setSymmetricDifference<T>(other: Set<T>): T[] {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return [];

    const symDiffList = [];

    for (const n of ctx) {
      if (other.has(n)) continue;

      symDiffList.push(n);
    }

    for (const n of other) {
      if (ctx.has(n as T)) continue;

      symDiffList.push(n as T);
    }

    return symDiffList;
  },
};

declare global {
  interface Set<T> extends SymmetricDifference<T> {}
}
