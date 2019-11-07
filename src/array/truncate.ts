import { PrototypeStruct } from '../index.js';

interface Truncate {
  truncate(len: number): void;
}

export const truncate: PrototypeStruct = {
  label: 'truncate',
  fn: function arrayTruncate<T>(len: number): void {
    const ctx = this as unknown as T[];
    const length = ctx.length;

    if ('number' !== typeof(len) || len < 0 || len > length) {
      throw new TypeError(`Expect 'len' to be in the range of 0 and length of array`);
    }

    const lenInt = Number(len);

    if (!lenInt) ctx.length = 0;
    else if (lenInt < length) {
      const slice = ctx.slice(0, lenInt);

      ctx.length = 0;
      for (const n of slice) ctx.push(n);
    }
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends Truncate {}
}
