import { isEven, IsEvenFn } from '../../number/is-even';

const { label, fn } = isEven;

Object.defineProperty(Number.prototype, label, { value: fn });

describe('Number.prototype.isEven', () => {
  type TestSuccess = [string, number, boolean];
  test.each<TestSuccess>([
    ['negative even number', -2, true],
    ['zero', 0, true],
    ['positive even number', 2, true],
    ['positive odd number', 13, false],
  ])('%s', (_, a, expected) => {
    const d = a.isEven();

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Number {
    isEven: IsEvenFn;
  }
}
