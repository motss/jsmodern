import { PrototypeStruct } from '..';

export type IsPromiseFn = (x: any) => boolean;
export const isPromise: PrototypeStruct = {
  isStatic: true,
  label: 'isPromise',
  fn: function promiseIsPromise(x: any): boolean {
    return Boolean(x && x.then);
  },
};

declare global {
  interface PromiseConstructor {
    isPromise: IsPromiseFn;
  }
}
