import { split } from '../../array/split.js';
import { extend } from '../../extend.js';

extend({ array: [split] });

describe('Array.prototype.split', () => {
  const errorMessage = new TypeError(`Expect 'predicate' to be a function`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, number[], undefined | null, TypeError];
  test.each<TestError>([
    ['.split()', [], undefined, errorMessage],
    ['.split(null)', [], null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.split(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  const cb = (n: number) => n % 3 === 0;

  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, number[], (n: number) => boolean, number[][]];
  test.each<TestSuccess>([
    ['[].split(cb)', [], cb, [[]]],
    ['[0].split(cb)', [0], cb, [[], []]],
    ['[1, 2].split(cb)', [1, 2], cb, [[1, 2]]],
    ['[0, 1, 2].split(cb)', [0, 1, 2], cb, [[], [1, 2]]],
    ['[1, 2, 3].split(cb)', [1, 2, 3], cb, [[1, 2], []]],
    ['[1, 3, 33, 2].split(cb)', [1, 3, 33, 2], cb, [[1], [], [2]]],
    ['[1, 2, 3, 4, 5, 6].split(cb)', [1, 2, 3, 4, 5, 6], cb, [[1, 2], [4, 5], []]],
    ['[1, 2, 3, 4, 5, 6, 0].split(cb)', [1, 2, 3, 4, 5, 6, 0], cb, [[1, 2], [4, 5], [], []]],
  ])('%s', (_, a, b, expected) => {
    const d = a.split(b!);

    expect(d).toEqual(expected!);
  });

});
