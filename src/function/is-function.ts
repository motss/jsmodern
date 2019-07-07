import { PrototypeStruct } from '..';

export type IsFunctionFn = (x: any) => boolean;
export const isFunction: PrototypeStruct = {
  label: 'isFunction',
  fn: function numberIsFunction(x: any): boolean {
    return 'function' === typeof(x);
  },
};
