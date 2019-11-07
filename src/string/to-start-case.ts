import { PrototypeStruct } from '../index.ts';
import { postCase, preCase } from './to-case.ts';

interface ToStartCase {
  toStartCase(): string;
}

export const toStartCase: PrototypeStruct = {
  label: 'toStartCase',
  fn: function stringToStartCase(): string {
    const ctx = (this as unknown as string);

    if (!ctx.length) return '';

    return postCase(
      preCase(ctx).replace(/\b[a-zA-z]/gi, s => s.toUpperCase()), ' ');
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends ToStartCase {}
}
