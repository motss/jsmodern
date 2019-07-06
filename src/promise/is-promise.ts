import { PrototypeStruct } from '..';

export type IsPromiseFn = (x: any) => boolean;
export const isPromise: PrototypeStruct = {
  label: 'isPromise',
  fn: function arrayIsPromise(x: any): boolean {
    return Boolean(x && x.then);
  },
};
