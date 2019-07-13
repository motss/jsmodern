import { PrototypeStruct } from '..';

export type LastItemFn = () => string;
export const lastItem: PrototypeStruct = {
  label: 'lastItem',
  fn: function stringLastItem(): string {
    const ctx = (this as unknown as string);

    return ctx.length < 2 ? ctx : ctx[ctx.length - 1];
  },
};

declare global {
  interface String {
    lastItem: LastItemFn;
  }
}
