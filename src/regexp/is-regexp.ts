import { PrototypeStruct } from '..';

export type IsRegExpFn = (x: any) => boolean;
export const isRegExp: PrototypeStruct = {
  label: 'isRegExp',
  fn: function regExpIsRegExp(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'RegExp' === x.constructor.name;
  },
};