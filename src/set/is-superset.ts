import { PrototypeStruct } from '..';
import { utilIsSet } from './is-set';

export type IsSupersetFn<T> = (other: Set<T>) => boolean;
export const isSuperset: PrototypeStruct = {
  label: 'isSuperset',
  fn: function setIsSuperset<T>(other: Set<T>): boolean {
    const ctx = this as unknown as Set<T>;

    if (!utilIsSet(other)) throw new TypeError(`Expect 'other' to be a Set`);

    if (!ctx.size && !other.size) return true;

    for (const n of other) if (!ctx.has(n as T)) return false;

    return true;
  },
};

declare global {
  interface Set<T> {
    isSuperset: IsSupersetFn<T>;
  }
}
