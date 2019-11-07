import { PrototypeStruct } from '../index.ts';

const NEWLINE_REGEXP = /\r?\n/i;

interface Lines {
  lines(): string[];
}

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
  // tslint:disable-next-line: no-empty-interface
  interface String extends Lines {}
}
