import { PrototypeStruct } from '..';

export type IsBooleanFn = (x: any) => boolean;
export const isBoolean: PrototypeStruct = {
  isStatic: true,
  label: 'isBoolean',
  fn: function booleanIsBoolean(x: any): boolean {
    return null == x ? false : 'boolean' === typeof(x);
  },
};
