import { PrototypeStruct } from '..';

export type IsFunctionFn = (x: any) => boolean;
export const isFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isFunction',
  fn: function functionIsFunction(x: any): boolean {
    return 'function' === typeof(x);
  },
};
