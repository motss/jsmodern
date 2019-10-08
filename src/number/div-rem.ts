import { PrototypeStruct } from '..';

interface DivRem {
  divRem(divisor: number): number[];
}

export const divRem: PrototypeStruct = {
  label: 'divRem',
  fn: function numberDivRem(divisor: number): number[] {
    const ctx = this as unknown as number;

    const x = Number(divisor);
    const quotient = Math.floor(ctx / x);
    const remainder = ctx - (quotient * x);

    return [quotient, remainder];
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends DivRem {}
}
