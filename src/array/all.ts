import { PrototypeStruct } from '..';

type AllPredicate<T> = (value: T) => boolean;
export type AllFn<T> = (predicate: AllPredicate<T>) => boolean;
export const all: PrototypeStruct = {
  label: 'all',
  fn: function arrayAll<T>(predicate: AllPredicate<T>): boolean {
    const ctx = this as unknown as T[];

    return ctx.every(predicate);
  },
};
