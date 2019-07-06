import { splitAt, SplitAtFn } from '../../array/split-at';

const { label, fn } = splitAt;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.splitAt', () => {
  const errorMessage = new TypeError(`Expect 'at' to be in the range of 0 and length of array`);

  type TestError = [string, number[], null | undefined | number, Error];
  test.each<TestError>([
    ['[].splitAt()', [], undefined, errorMessage],
    ['[].splitAt(null)', [], null, errorMessage],
    ['[].splitAt(-1)', [], -1, errorMessage],
    ['[].splitAt(1)', [], 1, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.splitAt(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number[], number, number[][]];
  test.each<TestSuccess>([
    ['.splitAt(0)', [], 0, [[], []]],
    ['.splitAt(0)', [1, 2], 0, [[], [1, 2]]],
    ['.splitAt(1)', [1, 2], 1, [[1], [2]]],
    ['.splitAt(2)', [1, 2], 2, [[1, 2], []]],
    ['.splitAt(3)', [1, 2, 3, 4, 5, 6], 3, [[1, 2, 3], [4, 5, 6]]],
  ])('%s', (_, a, b, expected) => {
    const d = a.splitAt(b);

    expect(d).toEqual(expected);
  });

});

declare global {
  interface Array<T> {
    splitAt: SplitAtFn<T>;
  }
}
