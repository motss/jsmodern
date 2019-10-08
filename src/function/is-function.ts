import { PrototypeStruct } from '..';

interface IsFunction {
  isFunction(x: any): boolean;
}

export const isFunction: PrototypeStruct = {
  isStatic: true,
  label: 'isFunction',
  fn: function functionIsFunction(x: any): boolean {
    return 'function' === typeof(x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Function extends IsFunction {}
}
