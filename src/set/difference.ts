import { PrototypeStruct } from '..';
import { utilIsSet } from './is-set';

export type DifferenceFn<T> = (other: Set<T>) => T[];
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