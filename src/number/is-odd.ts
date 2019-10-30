// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface IsOdd {
  isOdd(): boolean;
}

export const isOdd: PrototypeStruct = {
  label: 'isOdd',
  fn: function numberIsOdd(): boolean {
    const ctx = this as unknown as number;

    // tslint:disable-next-line: no-bitwise
    return 1 === (ctx & 1);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends IsOdd {}
}
