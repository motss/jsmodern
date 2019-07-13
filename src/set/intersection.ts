import { PrototypeStruct } from '..';
import { utilIsSet } from './is-set';

export type IntersectionFn<T> = (other: Set<T>) => T[];
export const intersection: PrototypeStruct = {
  label: 'intersection',
  fn: function setIntersection<T>(other: Set<T>): T[] {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return [];

    const intersectionList = [];

    for (const n of ctx) if (other.has(n)) intersectionList.push(n);

    return intersectionList;
  },
};

declare global {
  interface Set<T> {
    intersection: IntersectionFn<T>;
  }
}
