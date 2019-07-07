import { PrototypeStruct } from '..';

export type IsAsyncFunctionFn = (n: any) => boolean;
export const isAsyncFunction: PrototypeStruct = {
  label: 'isAsyncFunction',
  fn: function numberIsAsyncFunction(x: any): boolean {
    return 'function' === typeof(x) && 'AsyncFunction' === x.constructor.name;
  },
};
