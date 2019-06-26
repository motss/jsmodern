import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case';

export const toPascalCase: PrototypeStruct = {
  label: 'toPascalCase',
  function: function stringToPascalCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toUpperCase()));
  },
};
