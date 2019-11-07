import { PrototypeStruct } from '../index.ts';

interface Enumerate<T> {
  enumerate(): [number, T][];
}

export const enumerate: PrototypeStruct = {
  label: 'enumerate',
  fn: function arrayEnumerate<T>(): [number, T][] {
    const ctx = this as unknown as T[];

    return ctx.map((n, i) => [i, n]);
  },
};

declare global {
  interface Array<T> extends Enumerate<T> {}
}
