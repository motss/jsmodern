import { PrototypeStruct } from '..';

type FoldPredicate<T, U> = (
  previousValue: U,
  currentValue: T,
  index: number) => T extends U ? T : U;
interface Fold<T> {
  fold(initialValue: T, predicate: FoldPredicate<T, T>): T;
  fold<U>(initialValue: U, predicate: FoldPredicate<T, U>): U;
}

export const fold: PrototypeStruct = {
  label: 'fold',
  fn: function arrayFold<T>(
    init: T,
    predicate: FoldPredicate<T, T>
  ): T {
    const ctx = this as unknown as T[];

    return ctx.reduce<T>(predicate, init);
  },
};

declare global {
  interface Array<T> extends Fold<T> {}
}
