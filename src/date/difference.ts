import { PrototypeStruct } from '..';
import { dateIsDate } from './is-date';

export function utilDateDifference(a: Date, b: Date) {
  /**
   * Utility functions are not meant to be exposed therefore `a` is not type-checked.
   */
  if (!dateIsDate(b)) throw new TypeError(`Cannot compare dates with non-date argument`);

  const aTime = a.getTime();
  const bTime = b.getTime();

  return aTime - bTime;
}

interface Difference {
  difference(other: Date): number;
}

export const difference: PrototypeStruct = {
  label: 'difference',
  fn: function dateDifference(other: Date): number {
    const ctx = this as unknown as Date;

    return utilDateDifference(ctx, other);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Date extends Difference {}
}
