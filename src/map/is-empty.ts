import { PrototypeStruct } from '..';

export type IsEmptyFn = () => boolean;
export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function mapIsEmpty<K, V>(): boolean {
    const ctx = this as unknown as Map<K, V>;

    return !ctx.size;
  },
};
