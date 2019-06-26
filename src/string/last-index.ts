import { PrototypeStruct } from '..';

export const lastIndex: PrototypeStruct = {
  label: 'lastIndex',
  function: function stringLastIndex(): number {
    const ctx = (this as unknown as string);

    return ctx.length < 2 ? 0 : ctx.length - 1;
  },
};
