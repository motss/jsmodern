import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case.js';

interface ToSnakeCase {
  toSnakeCase(): string;
}

export const toSnakeCase: PrototypeStruct = {
  label: 'toSnakeCase',
  fn: function stringToSnakeCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toLowerCase()), '_');
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends ToSnakeCase {}
}
