import { PrototypeStruct } from '..';

export type IsAsyncGeneratorFunctionFn = (x: any) => boolean;
export const isAsyncGeneratorFunction: PrototypeStruct = {
  label: 'isAsyncGeneratorFunction',
  fn: function functionIsAsyncGeneratorFunction(x: any): boolean {
    return 'function' === typeof(x) && 'AsyncGeneratorFunction' === x.constructor.name;
  },
};
