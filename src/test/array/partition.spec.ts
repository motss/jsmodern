import { partition } from '../../array/partition.js';
import { extend } from '../../extend.js';

extend({ array: [partition] });

describe('Array.prototype.partition', () => {
  const errorMessage = new TypeError(`Expect 'predicate' to be a function`);

  type TestError = [string, number[], null | undefined, TypeError];
  test.each<TestError>([
    ['.partition()', [], undefined, errorMessage],
    ['.partition()', [], null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.partition(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  const cb = (n: number) => n % 3 === 0;
  type TestSuccess = [string, number[], [number[], number[]]];
  test.each<TestSuccess>([
    ['[].partition(cb)', [], [[], []]],
    ['[0].partition(cb)', [0], [[0], []]],
    ['[0, 1].partition(cb)', [0, 1], [[0], [1]]],
    ['[0, 1, 2].partition(cb)', [0, 1, 2], [[0], [1, 2]]],
    ['[0, 1, 2, 3].partition(cb)', [0, 1, 2, 3], [[0, 3], [1, 2]]],
    ['[33, 3].partition(cb)', [33, 3], [[33, 3], []]],
    ['[11, 13].partition(cb)', [11, 13], [[], [11, 13]]],
  ])('%s', (_, a, expected) => {
    const d = a.partition(cb);

    expect(d).toEqual(expected);
  });
});
