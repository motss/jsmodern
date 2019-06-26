import { PrototypeStruct } from '..';

export const insert: PrototypeStruct = {
  label: 'insert',
  function: function stringInsert(index: number, s: string): string {
    const ctx = this as unknown as string;
    const len = ctx.length;

    if (index > len) throw new TypeError('String index out of bounds');

    if (!len) return s;
    if (index === len - 1) return `${ctx}${s}`;
    if (!index) return `${s}${ctx}`;

    const slice0 = ctx.slice(0, index);
    const sliceRest = ctx.slice(index);

    return `${slice0}${s}${sliceRest}`;
  },
};
