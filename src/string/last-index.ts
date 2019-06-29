import { PrototypeStruct } from '..';

export type LastIndexFn = () => number;
export const lastIndex: PrototypeStruct = {
  label: 'lastIndex',
  fn: function stringLastIndex(): number {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    return !len ? -1 : len - 1;
  },
};
