import { isBetween, IsBetweenFn } from '../../number/is-between.js';

const { label, fn } = isBetween;

Object.defineProperty(Number.prototype, label, { value: fn });

describe('Number.prototype.isBetween', () => {
  type TestSuccess = [string, number, number | null, number | null, boolean];
  test.each<TestSuccess>([
    [`8 in the range of [null, null]`, 8, null, null, false],
    [`8 in the range of [null, 12]`, 8, null, 12, true],
    [`8 in the range of [1, null]`, 8, 1, null, false],

    [`8 in the range of [1, 3]`, 8, 1, null, false],
    [`8 in the range of [-1, -3]`, 8, -1, -3, false],
    [`8 in the range of [-1, 3]`, 8, -1, 3, false],
    [`8 in the range of [1, -3]`, 8, 1, -3, false],
    [`8 in the range of [1, 7]`, 8, 1, 7, false],

    [`8 in the range of [8, 13]`, 8, 8, 13, true],
    [`8 in the range of [1, 13]`, 8, 1, 13, true],
  ])('%s', (_, a, b, c, expected) => {
    const d = a.isBetween(b!, c!);

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Number {
    isBetween: IsBetweenFn;
  }
}
