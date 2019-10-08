import { PrototypeStruct } from '..';

interface IsError {
  isError(x: any): boolean;
}

export const isError: PrototypeStruct = {
  isStatic: true,
  label: 'isError',
  fn: function errorIsError(x: any): boolean {
    return null == x ? false : x instanceof Error;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface ErrorConstructor extends IsError {}
}
