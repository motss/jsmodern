import { PrototypeStruct } from '..';

interface Sum<T> {
  sum(): T;
}

export const sum: PrototypeStruct = {
  label: 'sum',
  fn: function arraySum<T>(): string | number {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return 0;
    if (1 === len) return ctx[0] as unknown as number;

    return ctx.reduce((p, n) => p + (n as unknown as number), 0);
  },
};

declare global {
  interface Array<T> extends Sum<T> {}
}
