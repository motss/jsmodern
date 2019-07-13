import { PrototypeStruct } from '..';

export type LenFn = () => number;
export const len: PrototypeStruct = {
  label: 'len',
  fn: function mapLen<K, V>(): number {
    const ctx = this as unknown as Map<K, V>;

    return ctx.size;
  },
};

declare global {
  interface Map<K, V> {
    len: LenFn;
  }
}
