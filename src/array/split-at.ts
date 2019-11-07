interface SplitAt<T> {
  splitAt(valueToFind: T): [T[], T[]];
}

export const splitAt: PrototypeStruct = {
  label: 'splitAt',
  fn: function arraySplitAt<T>(at: number): [T[], T[]] {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if ('number' !== typeof(at) || at < 0 || at > len) {
      throw new TypeError(`Expect 'at' to be in the range of 0 and length of array`);
    }

    if (!len) return [[], []];

    const atInt = Number(at);

    if (!atInt) return [[], ctx];
    if (atInt === len) return [ctx, []];

    return [ctx.slice(0, atInt), ctx.slice(atInt)];
  },
};

declare global {
  interface Array<T> extends SplitAt<T> {}
}
