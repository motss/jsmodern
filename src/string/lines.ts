import { PrototypeStruct } from '..';

const NEWLINE_REGEXP = /(\r?\n)/i;

export const lines: PrototypeStruct = {
  label: 'lines',
  function: function stringLines(): string[] {
    const ctx = (this as unknown as string);

    if (!ctx.length) return [];

    const strArray = ctx.split(NEWLINE_REGEXP);
    const isEmptyStr = strArray.slice(-1);

    /** Final line ending is optional */
    if (isEmptyStr) return strArray.slice(0, -1);
    return strArray;
  },
};
