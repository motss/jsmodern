interface IsAsyncGeneratorFunction {
  isAsyncGeneratorFunction(x: any): boolean;
}

export const isAsyncGeneratorFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isAsyncGeneratorFunction',
  fn: function functionIsAsyncGeneratorFunction(x: any): boolean {
    return 'function' === typeof(x) && 'AsyncGeneratorFunction' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Function extends IsAsyncGeneratorFunction {}
}
