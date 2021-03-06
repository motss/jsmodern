import type { PrototypeStruct } from '../index.js';

interface SplitWhitespace {
  splitWhitespace(): string[];
}

export const splitWhitespace: PrototypeStruct = {
  label: 'splitWhitespace',
  fn: function stringSplitWhitespace(): string[] {
    const ctx = (this as unknown as string);

    return !ctx.length ? [] : ctx.split(/\s/gi).filter(n => '' !== n);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends SplitWhitespace {}
}
