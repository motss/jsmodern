import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case';

export const toKebabCase: PrototypeStruct = {
  label: 'toKebabCase',
  function: function stringToKebabCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(
      preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toLowerCase()), '-');
  },
};
