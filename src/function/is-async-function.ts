interface IsAsyncFunction {
  isAsyncFunction(x: any): boolean;
}

export const isAsyncFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isAsyncFunction',
  fn: function functionIsAsyncFunction(x: any): boolean {
    return 'function' === typeof(x) && 'AsyncFunction' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Function extends IsAsyncFunction {}
}
