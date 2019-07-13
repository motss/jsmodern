import { PrototypeStruct } from '..';

export type LastItemFn<T> = () => T | undefined;
export const lastItem: PrototypeStruct = {
  label: 'lastItem',
  fn: function arrayLastItem<T>(): T | undefined {
    const ctx = this as unknown as T[];

    const len = ctx.length;

    if (!len) return void 0;
    if (1 === len) return ctx[0];
    return ctx[len - 1];
  },
};

declare global {
  interface Array<T> {
    lastItem: LastItemFn<T>;
  }
}
