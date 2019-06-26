import { PrototypeStruct } from '..';

export const contains: PrototypeStruct = {
  label: 'contains',
  function: function stringContains(s: string): boolean {
    const ctx = (this as unknown as string);
    const len = ctx.length;

    if (!len || s.length > len) return false;

    return ''.includes ? ctx.includes(s) : ctx.indexOf(s) >= 0;
  },
};
