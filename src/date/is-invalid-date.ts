import { PrototypeStruct } from '../index.ts';
import { dateIsDate } from './is-date.ts';

interface IsInvalidDate {
  isInvalidDate(x: any): boolean;
}

export const isInvalidDate: PrototypeStruct = {
  isStatic: true,
  label: 'isInvalidDate',
  fn: function dateIsInvalidDate(x: any): boolean {
    if (null == x || !dateIsDate(x)) return false;

    return Number.isNaN(+x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface DateConstructor extends IsInvalidDate {}
}
