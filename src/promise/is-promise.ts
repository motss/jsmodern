import { PrototypeStruct } from '../index.js';

interface IsPromise {
  isPromise(x: any): boolean;
}

export const isPromise: PrototypeStruct = {
  isStatic: true,
  label: 'isPromise',
  fn: function promiseIsPromise(x: any): boolean {
    return Boolean(x && x.then);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface PromiseConstructor extends IsPromise {}
}
