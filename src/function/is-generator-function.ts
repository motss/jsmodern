import { PrototypeStruct } from '..';

export type IsGeneratorFunctionFn = (x: any) => boolean;
export const isGeneratorFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isGeneratorFunction',
  fn: function functionIsGeneratorFunction(x: any): boolean {
    return 'function' === typeof(x) && 'GeneratorFunction' === x.constructor.name;
  },
};

declare global {
  interface Function {
    isGeneratorFunction: IsGeneratorFunctionFn;
  }
}
