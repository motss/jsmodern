import { PrototypeStruct } from '..';
import { utilDateDifference } from './difference';

export type IsAfterFn = (other: Date) => boolean;
export const isAfter: PrototypeStruct = {
  label: 'isAfter',
  fn: function dateIsAfter(other: Date): boolean {
    const ctx = this as unknown as Date;

    return utilDateDifference(ctx, other) > 0;
  },
};
