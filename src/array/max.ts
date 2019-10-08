import { PrototypeStruct } from '..';

interface Max<T> {
  max(): T | undefined;
}

export const max: PrototypeStruct = {
  label: 'max',
  fn: function arrayMax<T>(): T | undefined {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return void 0;
    if (1 === len) return ctx[0];

    let maxTemp = Number.NEGATIVE_INFINITY;
    let maxValue: any;

    for (const n of ctx) {
      const nType = typeof(n);

      if ('string' === nType && 1 === (n as unknown as string).length) {
        const pt = (n as unknown as string).codePointAt(0)!;

        if (pt > maxTemp) {
          maxTemp = pt;
          maxValue = n;
          continue;
        }
      } else if ('number' === nType && (n as unknown as number) > maxTemp) {
        maxTemp = maxValue = n as unknown as number;
      }
    }

    return maxValue as T;
  },
};

declare global {
  interface Array<T> extends Max<T> {}
}
