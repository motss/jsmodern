import { PrototypeStruct } from '..';

export type EndsWithFn<T> = (needle: T[]) => boolean;
export const endsWith: PrototypeStruct = {
  label: 'endsWith',
  fn: function arrayEndsWith<T>(needle: T[]): boolean {
    const ctx = this as unknown as T[];

    if (!Array.isArray(needle)) {
      throw new TypeError(`Expect 'needle' to be an array`);
    }

    const ctxLen = ctx.length;
    const len = needle.length;

    if (!len) return true;
    if (!ctxLen || ctxLen < len) return false;

    // offset_for_a_index = a.length - b.length
    //
    // a = [1, 1, 2, 3, 4]
    // b = [4]
    // offset = a.length - b.length = 5 - 1 = 4 #
    // loop if i = 0; i < b.length; i++
    // i: 0; b[i] = b[0] = 4; a[i + offset] = a[0 + 4] = a[4] = 4
    //
    // a = [1, 1, 2, 3, 4]
    // b = [3, 4]
    // offset = a.length - b.length = 5 - 2 = 3 #
    // loop if i = 0; i < b.length; i++
    // i: 0; b[i] = b[0] = 3; a[i + offset] = a[0 + 3] = a[3] = 3
    // i: 1; b[i] = b[1] = 4; a[i + offset] = a[1 + 3] = a[3] = 4
    //
    // a = [1, 1, 2, 3, 4]
    // b = [2, 3, 4]
    // offset = a.length - b.length = 5 - 3 = 2 #
    // loop if i = 0; i < b.length; i++
    // i: 0; b[i] = b[0] = 2; a[i + offset] = a[0 + 2] = a[2] = 2
    // i: 1; b[i] = b[1] = 3; a[i + offset] = a[1 + 2] = a[3] = 3
    // i: 2; b[i] = b[2] = 4; a[i + offset] = a[2 + 2] = a[4] = 4
    //
    // a = [1, 1, 2, 3, 4]
    // b = [1, 2, 3, 4]
    // offset = a.length - b.length = 5 - 4 = 1 #
    // loop if i = 0; i < b.length; i++
    // i: 0; b[i] = b[0] = 1; a[i + offset] = a[0 + 1] = a[1] = 1
    // i: 1; b[i] = b[1] = 2; a[i + offset] = a[1 + 1] = a[2] = 2
    // i: 2; b[i] = b[2] = 3; a[i + offset] = a[2 + 1] = a[3] = 3
    // i: 3; b[i] = b[3] = 4; a[i + offset] = a[3 + 1] = a[4] = 4
    //
    // a = [1, 1, 2, 3, 4]
    // b = [1, 1, 2, 3, 4]
    // offset = a.length - b.length = 5 - 5 = 0 #
    // loop if i = 0; i < b.length; i++
    // i: 0; b[i] = b[0] = 1; a[i + offset] = a[0 + 0] = a[0] = 1
    // i: 1; b[i] = b[1] = 1; a[i + offset] = a[1 + 0] = a[1] = 1
    // i: 2; b[i] = b[2] = 2; a[i + offset] = a[2 + 0] = a[2] = 2
    // i: 3; b[i] = b[3] = 3; a[i + offset] = a[3 + 0] = a[3] = 3
    // i: 4; b[i] = b[4] = 4; a[i + offset] = a[4 + 0] = a[4] = 4
    const offsetIndex = ctxLen - len;

    // A B OR AND
    // 0 0 0  0
    // 0 1 1  0
    // 1 0 1  0
    // 1 1 1  1
    let matched = 1;
    for (let i = 0; i < len; i += 1) {
      const val = needle[i];

      // tslint:disable-next-line: no-bitwise
      matched &= Number(val === ctx[i + offsetIndex]);
    }

    return Boolean(matched);
  },
};

declare global {
  interface Array<T> {
    endsWith: EndsWithFn<T>;
  }
}
