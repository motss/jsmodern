import { PrototypeStruct } from '../index.ts';

type AllPredicate<T> = (value: T) => boolean;
interface All<T> {
  all(predicate: AllPredicate<T>): boolean;
}

export const all: PrototypeStruct = {
  label: 'all',
  fn: function arrayAll<T>(predicate: AllPredicate<T>): boolean {
    const ctx = this as unknown as T[];

    return ctx.every(predicate);
  },
};

declare global {
  interface Array<T> extends All<T> {}
}
