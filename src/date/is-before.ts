import { PrototypeStruct } from '..';
import { utilDateDifference } from './difference';

export type IsBeforeFn = (other: Date) => boolean;
export const isBefore: PrototypeStruct = {
  label: 'isBefore',
  fn: function dateIsBefore(other: Date): boolean {
    const ctx = this as unknown as Date;

    return utilDateDifference(ctx, other) < 0;
  },
};
