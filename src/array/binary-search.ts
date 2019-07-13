import { PrototypeStruct } from '..';

export type BinarySearchFn<T> = (x: T) => number;
export const binarySearch: PrototypeStruct = {
  label: 'binarySearch',
  fn: function arrayBinarySearch<T>(x: T): number {
    const ctx = this as unknown as T[];

    let l = 0;
    let r = ctx.length - 1;

    while (l <= r) {
      // tslint:disable-next-line: no-bitwise
      const mid = (l + (r - l) / 2) | 0;
      const val = ctx[mid];

      if (x === val) return mid;
      if (x > val) l = mid + 1;
      if (x < val) r = mid - 1;
    }

    return -1;
  },
};

declare global {
  interface Array<T> {
    binarySearch: BinarySearchFn<T>;
  }
}
