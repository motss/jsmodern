import { PrototypeStruct } from '../index.ts';

export type IsRegExpFn = (x: any) => boolean;
export const isRegExp: PrototypeStruct = {
  isStatic: true,
  label: 'isRegExp',
  fn: function regExpIsRegExp(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'RegExp' === x.constructor.name;
  },
};

declare global {
  interface RegExpConstructor {
    isRegExp: IsRegExpFn;
  }
}
