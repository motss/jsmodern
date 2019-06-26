import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case';

export const toCamelCase: PrototypeStruct = {
  label: 'toCamelCase',
  function: function stringToCamelCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(
      preCase(ctx).replace(/([^a-zA-Z-0-9]+)\b[a-zA-z]/gi, s => s.toUpperCase()));
  },
};
