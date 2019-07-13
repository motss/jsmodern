import { PrototypeStruct } from '..';

export type IsOddFn = () => boolean;
export const isOdd: PrototypeStruct = {
  label: 'isOdd',
  fn: function numberIsOdd(): boolean {
    const ctx = this as unknown as number;

    // tslint:disable-next-line: no-bitwise
    return 1 === (ctx & 1);
  },
};

declare global {
  interface Number {
    isOdd: IsOddFn;
  }
}
