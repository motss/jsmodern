// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';
import { utilIsSet } from './is-set.js';

interface Difference<T> {
  difference(other: Set<T>): T[];
}

export const difference: PrototypeStruct = {
  label: 'difference',
  fn: function setDifference<T>(other: Set<T>): T[] {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return [];

    const diffList = [];

    for (const n of ctx) {
      if (other.has(n)) continue;

      diffList.push(n);
    }

    return diffList;
  },
};

declare global {
  interface Set<T> extends Difference<T> {}
}
