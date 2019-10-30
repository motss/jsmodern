// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

type SelectCallbackFn<T> = (element: T) => boolean;
interface Select<T> {
  select(callbackFn: SelectCallbackFn<T>): T[];
}

export const select: PrototypeStruct = {
  label: 'select',
  fn: function arraySelect<T>(callbackFn: SelectCallbackFn<T>): T[] {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if ('function' !== typeof(callbackFn)) {
      throw new TypeError(`Expect 'callbackFn' to be a function`);
    }

    if (!len) return [];

    const result: T[] = [];
    for (let i = 0; i < len; i += 1) {
      const n = ctx[i];
      if (callbackFn(n)) result.push(n);
    }

    return result;
  },
};

declare global {
  interface Array<T> extends Select<T> {}
}
