import { PrototypeStruct } from '..';

export type IsIteratorFn = (x: any) => boolean;
export const isIterator: PrototypeStruct = {
  label: 'isIterator',
  fn: function iteratorIsIterator(x: any): boolean {
    return null == x ?
      false :
      'object' === typeof(x) && Boolean(
        (x as unknown as IterableIterator<any>).next &&
        (x as unknown as IterableIterator<any>).return &&
        (x as unknown as IterableIterator<any>).throw &&
        (x as unknown as IterableIterator<any>)[Symbol.iterator]
      );
  },
};
