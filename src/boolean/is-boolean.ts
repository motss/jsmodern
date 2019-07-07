import { PrototypeStruct } from '..';

export type IsBooleanFn = (x: any) => boolean;
export const isBoolean: PrototypeStruct = {
  label: 'isBoolean',
  fn: function booleanIsBoolean(x: any): boolean {
    return null == x ? false : 'boolean' === typeof(x);
  },
};
