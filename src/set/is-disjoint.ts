import { PrototypeStruct } from '../index.ts';
import { utilIsSet } from './is-set.ts';

interface IsDisjoint<T> {
  isDisjoint(other: Set<T>): boolean;
}

export const isDisjoint: PrototypeStruct = {
  label: 'isDisjoint',
  fn: function setIsDisjoint<T>(other: Set<T>): boolean {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return true;

    for (const n of ctx) if (other.has(n)) return false;

    return true;
  },
};

declare global {
  interface Set<T> extends IsDisjoint<T> {}
}
