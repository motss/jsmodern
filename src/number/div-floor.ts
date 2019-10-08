import { PrototypeStruct } from '..';

export function utilDivFloor(a: number, b: number): number {
  return Math.floor(a / b);
}

interface DivFloor {
  divFloor(divisor: number): number;
}

export const divFloor: PrototypeStruct = {
  label: 'divFloor',
  fn: function numberDivFloor(divisor: number): number {
    const ctx = this as unknown as number;

    const x = Number(divisor);

    // tslint:disable-next-line: max-line-length
    if (!x) { throw new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`); }

    return utilDivFloor(ctx, x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends DivFloor {}
}
