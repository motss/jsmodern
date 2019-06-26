import { PrototypeStruct } from '..';

export const lastItem: PrototypeStruct = {
  label: 'lastItem',
  function: function stringLastItem(): string {
    const ctx = (this as unknown as string);

    return ctx.length < 2 ? ctx : ctx[ctx.length - 1];
  },
};
