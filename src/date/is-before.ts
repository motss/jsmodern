import { utilDateDifference } from './difference.js';

interface IsBefore {
  isBefore(other: Date): boolean;
}

export const isBefore: PrototypeStruct = {
  label: 'isBefore',
  fn: function dateIsBefore(other: Date): boolean {
    const ctx = this as unknown as Date;

    return utilDateDifference(ctx, other) < 0;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Date extends IsBefore {}
}
