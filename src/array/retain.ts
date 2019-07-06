import { PrototypeStruct } from '..';

type RetainCallback<T> = (element: T, index: number) => boolean;
export type RetainFn<T = unknown> = (callback: RetainCallback<T>) => void;
export const retain: PrototypeStruct = {
  label: 'retain',
  fn: function arrayRetain<T = unknown>(callback: RetainCallback<T>): void {
    const ctx = this as unknown as T[];

    if ('function' !== typeof(callback)) {
      throw new TypeError(`Expect 'callback' to be a function`);
    }

    const len = ctx.length;

    if (!len) return;

    const retained = ctx.filter(callback);

    ctx.length = 0;
    for (const n of retained) ctx.push(n);
  },
};
