import { lcm, LcmFn } from '../../number/lcm';

const { label, fn } = lcm;

Object.defineProperty(Number.prototype, label, { value: fn });

describe('Number.prototype.lcm', () => {
  type TestSuccess = [string, number, number | null, number];
  test.each<TestSuccess>([
    ['8.lcm(null)', 8, null, 0],

    ['8.lcm(0)', 8, 0, 0],
    ['8.lcm(2)', 8, 2, 8],
    ['8.lcm(-1)', 8, -1, 8],
    ['8.lcm(Infinity)', 8, Infinity, Infinity],
  ])('%s', (_, a, b, expected) => {
    const d = a.lcm(b!);

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Number {
    lcm: LcmFn;
  }
}
