import { PrototypeStruct } from '..';
import { divFloorUtil } from './div-floor';

export type DivModFloorFn = (divisor: number) => number[];
export const divModFloor: PrototypeStruct = {
  label: 'divModFloor',
  fn: function numberDivModFloor(divisor: number): number[] {
    const ctx = this as unknown as number;

    const x = Number(divisor);

    // tslint:disable-next-line: max-line-length
    if (!x) { throw new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`); }

    const quotient = divFloorUtil(ctx, x);
    const remainder = ctx - (x * quotient);

    return [quotient, remainder];
  },
};
