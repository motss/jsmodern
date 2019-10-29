import { PrototypeStruct } from '..';

interface Sum<T> {
  sum(): T;
  sum<U>(): U;
}

export const sum: PrototypeStruct = {
  label: 'sum',
  fn: function arraySum<T, U>(): U extends null | undefined | unknown ? T : U {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return 0 as unknown as any;
    if (1 === len) return ctx[0] as unknown as any;

    return ctx.reduce<any>((p, n) => p + (n as unknown as any), 0);
  },
};

declare global {
  interface Array<T> extends Sum<T> {}
}
