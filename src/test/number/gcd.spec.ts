import { extend } from '../../extend.js';
import { gcd } from '../../number/gcd.js';

extend({ number: [gcd] });

describe('Number.prototype.gcd', () => {
  type TestSuccess = [string, number, number | null, number];
  test.each<TestSuccess>([
    ['8.gcd(null)', 8, null, 8],

    ['8.gcd(0)', 8, 0, 8],
    ['8.gcd(2)', 8, 2, 2],
    ['8.gcd(-1)', 8, -1, 1],
    ['8.gcd(Infinity)', 8, Infinity, 8],
  ])('%s', (_, a, b, expected) => {
    const d = a.gcd(b!);

    expect(d).toStrictEqual(expected);
  });
});
