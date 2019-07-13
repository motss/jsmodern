import { PrototypeStruct } from '..';

export type SplitWhitespaceFn = () => string[];
export const splitWhitespace: PrototypeStruct = {
  label: 'splitWhitespace',
  fn: function stringSplitWhitespace(): string[] {
    const ctx = (this as unknown as string);

    return !ctx.length ? [] : ctx.split(/\s/gi).filter(n => '' !== n);
  },
};

declare global {
  interface String {
    splitWhitespace: SplitWhitespaceFn;
  }
}
