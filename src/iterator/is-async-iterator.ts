import { PrototypeStruct } from '../index.ts';

interface IsAsyncIterator {
  isAsyncIterator(x: any): boolean;
}

export const isAsyncIterator: PrototypeStruct = {
  isStatic: true,
  label: 'isAsyncIterator',
  fn: function iteratorIsAsyncIterator(x: any): boolean {
    return null == x ?
      false :
      'object' === typeof(x) && Boolean(
        (x as unknown as AsyncIterableIterator<any>).next &&
        (x as unknown as AsyncIterableIterator<any>).return &&
        (x as unknown as AsyncIterableIterator<any>).throw &&
        (x as unknown as AsyncIterableIterator<any>)[Symbol.asyncIterator]
      );
  },
};

declare global {
  namespace NodeJS {
    // tslint:disable-next-line: no-empty-interface
    interface Global extends IsAsyncIterator {}
  }

  namespace globalThis {
    // tslint:disable-next-line: no-empty-interface
    interface Window extends IsAsyncIterator {}
  }
}
