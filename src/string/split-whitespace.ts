import { PrototypeStruct } from '..';

export const splitWhitespace: PrototypeStruct = {
  label: 'splitWhitespace',
  function: function stringSplitWhitespace(): string[] {
    const ctx = (this as unknown as string);

    return !ctx.length ? [] : ctx.split(/\s/gi).filter(n => '' !== n);
  },
};
