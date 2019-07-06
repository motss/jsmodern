import { PrototypeStruct } from '..';

type FoldPredicate<T> = (previousValue: T, currentValue: T, index: number) => T;
export type FoldFn<T> = (initialValue: any, predicate: FoldPredicate<T>) => T;
export const fold: PrototypeStruct = {
  label: 'fold',
  fn: function arrayFold<T>(init: any, predicate: FoldPredicate<T>): T {
    const ctx = this as unknown as T[];

    return ctx.reduce(predicate, init);
  },
};
