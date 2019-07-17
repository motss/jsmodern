import { PrototypeStruct } from '..';

type RetainPredicate<T> = (element: T, index: number) => boolean;
export type RetainFn<T = unknown> = (predicate: RetainPredicate<T>) => void;
export const retain: PrototypeStruct = {
  label: 'retain',
  fn: function arrayRetain<T = unknown>(predicate: RetainPredicate<T>): void {
    const ctx = this as unknown as T[];

    if ('function' !== typeof(predicate)) {
      throw new TypeError(`Expect 'predicate' to be a function`);
    }

    const len = ctx.length;

    if (!len) return;

    const retained = ctx.filter(predicate);

    ctx.length = 0;
    for (const n of retained) ctx.push(n);
  },
};

declare global {
  interface Array<T> {
    retain: RetainFn<T>;
  }
}
