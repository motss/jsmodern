import { PrototypeStruct } from '..';

export type EnumerateFn<T> = () => [number, T];
export const enumerate: PrototypeStruct = {
  label: 'enumerate',
  fn: function arrayEnumerate<T>(): [number, T][] {
    const ctx = this as unknown as T[];

    return ctx.map((n, i) => [i, n]);
  },
};

declare global {
  interface Array<T> {
    enumerate: EnumerateFn<T>;
  }
}
