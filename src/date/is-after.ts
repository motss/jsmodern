import type { PrototypeStruct } from '../index.js';
import { utilDateDifference } from './difference.js';

interface IsAfter {
  isAfter(other: Date): boolean;
}

export const isAfter: PrototypeStruct = {
  label: 'isAfter',
  fn: function dateIsAfter(other: Date): boolean {
    const ctx = this as unknown as Date;

    return utilDateDifference(ctx, other) > 0;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Date extends IsAfter {}
}
