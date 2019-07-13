import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case';

export type ToSnakeCaseFn = () => string;
export const toSnakeCase: PrototypeStruct = {
  label: 'toSnakeCase',
  fn: function stringToSnakeCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toLowerCase()), '_');
  },
};

declare global {
  interface String {
    toSnakeCase: ToSnakeCaseFn;
  }
}
