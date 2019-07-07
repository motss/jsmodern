import { PrototypeStruct } from '..';

export type IsAsyncFunctionFn = (x: any) => boolean;
export const isAsyncFunction: PrototypeStruct = {
  label: 'isAsyncFunction',
  fn: function functionIsAsyncFunction(x: any): boolean {
    return 'function' === typeof(x) && 'AsyncFunction' === x.constructor.name;
  },
};
