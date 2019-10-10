import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case.js';

export type ToPascalCaseFn = () => string;
export const toPascalCase: PrototypeStruct = {
  label: 'toPascalCase',
  fn: function stringToPascalCase(): string {
    const ctx = (this as unknown as string);

    return !ctx.length ?
      '' :
      postCase(
        preCase(ctx).replace(/(\b[a-zA-Z])/g, (_, c) => c.toUpperCase()));
  },
};

declare global {
  interface String {
    toPascalCase: ToPascalCaseFn;
  }
}
