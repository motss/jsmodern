import { isOdd, IsOddFn } from '../../number/is-odd';

const { label, fn } = isOdd;

Object.defineProperty(Number.prototype, label, { value: fn });

describe('Number.prototype.isOdd', () => {
  type TestSuccess = [string, number, boolean];
  test.each<TestSuccess>([
    ['negative even number', -3, true],
    ['zero', 0, false],
    ['positive even number', 2, false],
    ['positive odd number', 13, true],
  ])('%s', (_, a, expected) => {
    const d = a.isOdd();

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Number {
    isOdd: IsOddFn;
  }
}
