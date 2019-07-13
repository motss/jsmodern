import { PrototypeStruct } from '..';

export type IsEvenFn = () => boolean;
export const isEven: PrototypeStruct = {
  label: 'isEven',
  fn: function numberIsEven(): boolean {
    const ctx = this as unknown as number;

    // tslint:disable-next-line: no-bitwise
    return !(ctx & 1);
  },
};

declare global {
  interface Number {
    isEven: IsEvenFn;
  }
}
