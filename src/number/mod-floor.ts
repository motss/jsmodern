import type { PrototypeStruct } from '../index.js';
import { utilDivFloor } from './div-floor.js';

interface ModFloor {
  modFloor(divisor: number): number;
}

export const modFloor: PrototypeStruct = {
  label: 'modFloor',
  fn: function numberModFloor(divisor: number): number {
    const ctx = this as unknown as number;

    // Floored integer modulo, satisfying:
    // a.divFloor(b) * b + a.modFloor(b) === a;
    //
    // a.modFloor(b) => a - (a.divFloor(b) * b); #

    const x = Number(divisor);

    // tslint:disable-next-line: max-line-length
    if (!x) { throw new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`); }

    const quotient = utilDivFloor(ctx, x);

    return ctx - (quotient * x);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends ModFloor {}
}
