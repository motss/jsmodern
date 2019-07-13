import { PrototypeStruct } from '..';

export type ShuffleFn = () => void;
export const shuffle: PrototypeStruct = {
  label: 'shuffle',
  fn: function arrayShuffle<T>(): void {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (len > 1) {
      const cloned = ctx.slice();

      ctx.length = 0;

      while (cloned.length > 0) {
        const rand = Math.floor(Math.random() * cloned.length);
        const shifted = cloned.splice(rand, 1)[0];

        ctx.push(shifted);
      }
    }
  },
};

declare global {
  interface Array<T> {
    shuffle: ShuffleFn;
  }
}
