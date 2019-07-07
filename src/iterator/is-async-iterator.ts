import { PrototypeStruct } from '..';

export type IsAsyncIteratorFn = (x: any) => boolean;
export const isAsyncIterator: PrototypeStruct = {
  label: 'isAsyncIterator',
  fn: function numberIsAsyncIterator(x: any): boolean {
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
