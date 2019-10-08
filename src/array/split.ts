import { PrototypeStruct } from '..';

type SplitPredicate<T> = (x: T) => boolean;
interface Split<T> {
  split(predicate: SplitPredicate<T>): T[][];
}

export const split: PrototypeStruct = {
  label: 'split',
  fn: function arraySplit<T>(predicate: SplitPredicate<T>): T[][] {
    const ctx = this as unknown as T[];

    if ('function' !== typeof(predicate)) {
      throw new TypeError(`Expect 'predicate' to be a function`);
    }

    const len = ctx.length;

    if (!len) return [[]];

    const set = [];
    let subset = [];
    let count = 2;

    for (let i = 0; i < len; i += 1) {
      const val = ctx[i];
      const shouldSplit = predicate(val);

      if (shouldSplit) {
        count -= 1;

        if (subset.length > 0) { set.push(subset); subset = []; }

        if (!i) set.push([]);
        if (len - 1 === i) set.push([]);
        if (!count) { set.push([]); count = 2; }

        continue;
      }

      if (count < 2) count = 2;
      subset.push(val);
    }

    if (subset.length > 0) set.push(subset);

    return set;
  },
};

declare global {
  interface Array<T> extends Split<T> {}
}
