import { PrototypeStruct } from '..';
import { utilIsSet } from './is-set';

export type IsSubsetFn<T> = (other: Set<T>) => boolean;
export const isSubset: PrototypeStruct = {
  label: 'isSubset',
  fn: function setIsSubset<T>(other: Set<T>): boolean {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return true;

    for (const n of ctx) if (!other.has(n)) return false;

    return true;
  },
};
