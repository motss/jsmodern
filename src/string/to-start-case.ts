import { PrototypeStruct } from '..';
import { postCase, preCase } from './to-case.js';

export type ToStartCaseFn = () => string;
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
  interface String {
    toStartCase: ToStartCaseFn;
  }
}
