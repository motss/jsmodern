import { PrototypeStruct } from '..';

export function dateIsDate(x: any): boolean {
  return null == x ? false : 'object' === typeof(x) && 'Date' === x.constructor.name;
}

export type IsDateFn = (x: any) => boolean;
export const isDate: PrototypeStruct = {
  isStatic: true,
  label: 'isDate',
  fn: dateIsDate,
};

declare global {
  interface DateConstructor {
    isDate: IsDateFn;
  }
}
