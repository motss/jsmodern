import { PrototypeStruct } from '..';

export type SumFn<T> = () => T;
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
