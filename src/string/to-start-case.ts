// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';
import { postCase, preCase } from './to-case.js';

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
