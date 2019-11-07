import { PrototypeStruct } from '../index.ts';

export function isArraySorted<T>(list: T[]): boolean {
  const len = list.length;

  if (!len || 1 === len) return true;

  let sorted = true;
  let prev = 0;

  for (const n of list) {
    const nType = typeof(n);

    if ('string' === nType && 1 === (n as unknown as string).length) {
      const pt = (n as unknown as string).codePointAt(0)!;

      if (pt < prev) {
        sorted = false;
        break;
      }

      prev = pt;
      continue;
    } else if ('number' === nType) {
      if (n as unknown as number < prev) {
        sorted = false;
        break;
      }

      prev = n as unknown as number;
      continue;
    }

    sorted = false;
    break;
  }

  return sorted;
}

interface IsSorted {
  isSorted(): boolean;
}

export const isSorted: PrototypeStruct = {
  label: 'isSorted',
  fn: function arrayIsSorted<T>(): boolean {
    const ctx = this as unknown as T[];

    return isArraySorted(ctx);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Array<T> extends IsSorted {}
}
