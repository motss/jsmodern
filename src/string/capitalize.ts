import { PrototypeStruct } from '..';

export const capitalize: PrototypeStruct = {
  label: 'capitalize',
  function: function stringCapitalize(): string {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    if (!len) return '';
    if (1 === len) return ctx.toUpperCase();

    const char0 = ctx.slice(0, 1);

    return `${char0.toUpperCase()}${ctx.slice(1).toLowerCase()}`;
  },
};
