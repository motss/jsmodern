import { PrototypeStruct } from '..';

export type IsEmptyFn = () => boolean;
export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function setIsEmpty<T>(): boolean {
    const ctx = this as unknown as Set<T>;

    return !ctx.size;
  },
};
