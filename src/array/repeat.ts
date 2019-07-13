import { PrototypeStruct } from '..';

export type RepeatFn<T> = (n: number) => T[];
export const repeat: PrototypeStruct = {
  label: 'repeat',
  fn: function arrayRepeat<T>(n: number): T[] {
    const ctx = this as unknown as T[];
    const len = ctx.length;
    const nInt = 'number' !== typeof(n) ? 0 : Number(n);

    if (!len || nInt < 1) return [];

    return Array.from(Array(nInt), () => ctx).reduce((p, o) => p.concat(o));
  },
};

declare global {
  interface Array<T> {
    repeat: RepeatFn<T>;
  }
}
