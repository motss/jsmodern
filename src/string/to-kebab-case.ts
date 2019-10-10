import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case.js';

export type ToKebabCaseFn = () => string;
export const toKebabCase: PrototypeStruct = {
  label: 'toKebabCase',
  fn: function stringToKebabCase(): string {
    const ctx = (this as unknown as string);

    return !ctx.length ?
     '' :
      postCase(
        preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toLowerCase()), '-');
  },
};

declare global {
  interface String {
    toKebabCase: ToKebabCaseFn;
  }
}
