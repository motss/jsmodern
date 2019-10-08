import { PrototypeStruct } from '..';

export function dateIsDate(x: any): boolean {
  return null == x ? false : 'object' === typeof(x) && 'Date' === x.constructor.name;
}

interface IsDate {
  isDate(x: any): boolean;
}

export const isDate: PrototypeStruct = {
  isStatic: true,
  label: 'isDate',
  fn: dateIsDate,
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface DateConstructor extends IsDate {}
}
