import { PrototypeStruct } from '..';

export type IsFunctionFn = (n: any) => boolean;
export const isFunction: PrototypeStruct = {
  label: 'isFunction',
  fn: function numberIsFunction(x: any): boolean {
    return 'function' === typeof(x);
  },
};
