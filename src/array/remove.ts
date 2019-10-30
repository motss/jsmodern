// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface Remove<T> {
  remove(index: number): T;
}

export const remove: PrototypeStruct = {
  label: 'remove',
  fn: function arrayRemove<T = unknown>(index?: number): T {
    const ctx = this as unknown as T[];
    const len = ctx.length;
    const indexInt = null == index ? 0 : Number(index);

    if ('number' !== typeof(index) || index < 0 || index > len - 1) {
      throw new TypeError(`Array index out of bound`);
    }

    return ctx.splice(indexInt, 1)[0];
  },
};

declare global {
  interface Array<T> extends Remove<T> {}
}
