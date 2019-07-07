import { PrototypeStruct } from '..';

export type IsGeneratorFunctionFn = (x: any) => boolean;
export const isGeneratorFunction: PrototypeStruct = {
  label: 'isGeneratorFunction',
  fn: function numberIsGeneratorFunction(x: any): boolean {
    return 'function' === typeof(x) && 'GeneratorFunction' === x.constructor.name;
  },
};
