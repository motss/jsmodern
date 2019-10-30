// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface Chunks<T> {
  chunks(chunkSize: number): T[] | T[][];
}

export const chunks: PrototypeStruct = {
  label: 'chunks',
  fn: function arrayChunks<T>(chunkSize: number): T[] | T[][] {
    const ctx = this as unknown as T[];
    const len = ctx.length;
    const chunkSizeInt = Number(chunkSize);

    if ('number' !== typeof(chunkSize) || chunkSizeInt < 1) {
      throw new TypeError(`Expect 'chunkSize' to be a number that is at least 1`);
    }

    if (!len) return [];
    if (1 === len || len === chunkSizeInt) return [ctx];

    const set = [];

    let subset = [];
    let i = chunkSizeInt;

    for (const n of ctx) {
      if (!i) {
        i = chunkSizeInt;
        set.push(subset);
        subset = [];
      }

      subset.push(n);

      i -= 1;
    }

    set.push(subset);

    return set;
  },
};

declare global {
  interface Array<T> extends Chunks<T> {}
}
