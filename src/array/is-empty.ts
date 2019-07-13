import { PrototypeStruct } from '..';

export type IsEmptyFn = () => boolean;
export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function arrayIsEmpty<T>(): boolean {
    const ctx = this as unknown as T[];

    return !(ctx.length);
  },
};

declare global {
  interface Array<T> {
    isEmpty: IsEmptyFn;
  }
}
