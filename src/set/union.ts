import { PrototypeStruct } from '..';
import { utilIsSet } from './is-set';

export type UnionFn<T> = (other: Set<T>) => T[];
export const union: PrototypeStruct = {
  label: 'union',
  fn: function setUnion<T>(other: Set<T>): T[] {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return [];

    const unionSet = new Set(ctx);
    const unionList = [];

    for (const n of other) unionSet.add(n as T);
    for (const n of unionSet) unionList.push(n);

    return unionList;
  },
};
