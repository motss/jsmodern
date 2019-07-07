import { PrototypeStruct } from '..';

export type IsErrorFn = (x: any) => boolean;
export const isError: PrototypeStruct = {
  label: 'isError',
  fn: function numberIsError(x: any): boolean {
    return null == x ? false : x instanceof Error;
  },
};
