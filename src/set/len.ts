import { PrototypeStruct } from '..';

export type LenFn = () => number;
export const len: PrototypeStruct = {
  label: 'len',
  fn: function setLen<T>(): number {
    const ctx = this as unknown as Set<T>;

    return ctx.size;
  },
};
