import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case';

export type ToCamelCaseFn = () => string;
export const toCamelCase: PrototypeStruct = {
  label: 'toCamelCase',
  fn: function stringToCamelCase(): string {
    const ctx = (this as unknown as string);

    return !ctx.length ?
      '' :
      postCase(
        preCase(ctx).replace(/([^a-zA-Z0-9]+)(\b[a-zA-z])/g, (_, __, c) => c.toUpperCase()));
  },
};
