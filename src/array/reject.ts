import type { PrototypeStruct } from '../index.js';

type RejectCallbackFn<T> = (element: T) => boolean;
interface Reject<T> {
  reject(callbackFn: RejectCallbackFn<T>): T[];
}

export const reject: PrototypeStruct = {
  label: 'reject',
  fn: function arrayReject<T>(callbackFn: RejectCallbackFn<T>): T[] {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if ('function' !== typeof(callbackFn)) {
      throw new TypeError(`Expect 'callbackFn' to be a function`);
    }

    if (!len) return [];

    const result: T[] = [];
    for (let i = 0; i < len; i += 1) {
      const n = ctx[i];
      if (!callbackFn(n)) result.push(n);
    }

    return result;
  },
};

declare global {
  interface Array<T> extends Reject<T> {}
}
