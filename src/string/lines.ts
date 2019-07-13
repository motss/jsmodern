import { PrototypeStruct } from '..';

const NEWLINE_REGEXP = /\r?\n/i;

export type LinesFn = () => string[];
export const lines: PrototypeStruct = {
  label: 'lines',
  fn: function stringLines(): string[] {
    const ctx = (this as unknown as string);

    if (!ctx.length) return [];

    const strArray = ctx.split(NEWLINE_REGEXP);
    const isEmptyStr = '' === strArray.slice(-1)[0];

    /** Final line ending is optional */
    return isEmptyStr ? strArray.slice(0, -1) : strArray;
  },
};

declare global {
  interface String {
    lines: LinesFn;
  }
}
