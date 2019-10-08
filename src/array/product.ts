import { PrototypeStruct } from '..';

interface Product<T> {
  product(): T | string | number;
}

export const product: PrototypeStruct = {
  label: 'product',
  fn: function arrayProduct<T>(): T | string | number {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return 0;
    if (1 === len) return ctx[0];

    return ctx.reduce((p, n) => p * (n as unknown as number), 1);
  },
};

declare global {
  interface Array<T> extends Product<T> {}
}
