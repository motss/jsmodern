import { PrototypeStruct } from '../index.ts';

type PartitionPredicate<T> = (n: T) => boolean;
interface Partition<T> {
  partition(n: PartitionPredicate<T>): [T[], T[]];
}

export const partition: PrototypeStruct = {
  label: 'partition',
  fn: function arrayPartition<T>(predicate: PartitionPredicate<T>): [T[], T[]] {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if ('function' !== typeof(predicate)) {
      throw new TypeError(`Expect 'predicate' to be a function`);
    }

    if (!len) return [[], []];

    const matched = [];
    const rest = [];
    for (const n of ctx) {
      predicate(n) ? matched.push(n) : rest.push(n);
    }

    return [matched, rest];
  },
};

declare global {
  interface Array<T> extends Partition<T> {}
}
