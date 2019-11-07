import { PrototypeStruct } from '../index.ts';

interface IsIterator {
  isIterator(x: any): boolean;
}

export const isIterator: PrototypeStruct = {
  isStatic: true,
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

declare global {
  namespace NodeJS {
    // tslint:disable-next-line: no-empty-interface
    interface Global extends IsIterator {}
  }

  namespace globalThis {
    // tslint:disable-next-line: no-empty-interface
    interface Window extends IsIterator {}
  }
}
