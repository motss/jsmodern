import { PrototypeStruct } from '../index.js';

interface Min<T> {
  min(): T | undefined;
}

export const min: PrototypeStruct = {
  label: 'min',
  fn: function arrayMin<T>(): T | undefined {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (!len) return void 0;
    if (1 === len) return ctx[0];

    let minTemp = Number.MAX_SAFE_INTEGER;
    let minValue: any;

    for (const n of ctx) {
      const nType = typeof(n);

      if ('string' === nType && 1 === (n as unknown as string).length) {
        const pt = (n as unknown as string).codePointAt(0)!;

        if (pt < minTemp) {
          minTemp = pt;
          minValue = n;
          continue;
        }
      } else if ('number' === nType && (n as unknown as number) < minTemp) {
        minTemp = minValue = n as unknown as number;
      }
    }

    return minValue as T;
  },
};

declare global {
  interface Array<T> extends Min<T> {}
}
