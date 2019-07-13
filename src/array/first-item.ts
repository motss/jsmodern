import { PrototypeStruct } from '..';

export type FirstItemFn<T> = () => T | undefined;
export const firstItem: PrototypeStruct = {
  label: 'firstItem',
  fn: function arrayFirstItem<T>(): T | undefined {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return void 0;
    if (1 === len) return ctx[0];
    return ctx.slice(0, 1)[0];
  },
};

declare global {
  interface Array<T> {
    firstItem: FirstItemFn<T>;
  }
}
