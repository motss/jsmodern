interface StartsWith<T> {
  startsWith(needle: T[]): boolean;
}

export const startsWith: PrototypeStruct = {
  label: 'startsWith',
  fn: function arrayStartsWith<T>(needle: T[]): boolean {
    const ctx = this as unknown as T[];

    if (!Array.isArray(needle)) {
      throw new TypeError(`Expect 'needle' to be an array`);
    }

    const ctxLen = ctx.length;
    const len = needle.length;

    if (!len) return true;
    if (!ctxLen || ctxLen < len) return false;

    // A B OR AND
    // 0 0 0  0
    // 0 1 1  0
    // 1 0 1  0
    // 1 1 1  1
    let matched = 1;
    for (let i = 0; i < len; i += 1) {
      const val = needle[i];
      // tslint:disable-next-line: no-bitwise
      matched &= Number(val === ctx[i]);
    }

    return Boolean(matched);
  },
};

declare global {
  interface Array<T> extends StartsWith<T> {}
}
