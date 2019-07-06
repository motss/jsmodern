import { PrototypeStruct } from '..';
import { gcdUtil } from './gcd';

export type LcmFn = (divisor: number) => number;
export const lcm: PrototypeStruct = {
  label: 'lcm',
  fn: function numberLcm(divisor: number): number {
    const ctx = this as unknown as number;

    // lcm(x, y) => x && y ? abs((x * y) / gcd(x, y)) : 0
    // lcm(4, 8) = abs((4 * 8) / gcd(4, 8))
    //
    // gcd(4, 8)
    // [4, 8]
    // [8, 4%8] = [8, 4]
    // [4, 8%4] = [4, 0]
    // 4 #
    //
    // abs(32 / 4) = 8 #
    const x = ctx;
    const y = divisor;

    return Math.abs((x * y) / gcdUtil(x, y));
  },
};