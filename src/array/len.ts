import { PrototypeStruct } from '..';

export type LenFn = () => number;
export const len: PrototypeStruct = {
  label: 'len',
  fn: function arrayLen<T>(): number {
    const ctx = this as unknown as T[];

    return ctx.length;
  },
};
