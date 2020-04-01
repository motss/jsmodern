import type { PrototypeStruct } from '../index.js';

interface IsGeneratorFunction {
  isGeneratorFunction(x: any): boolean;
}

export const isGeneratorFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isGeneratorFunction',
  fn: function functionIsGeneratorFunction(x: any): boolean {
    return 'function' === typeof(x) && 'GeneratorFunction' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Function extends IsGeneratorFunction {}
}
