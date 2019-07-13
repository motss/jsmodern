import { enumerate } from '../../array/enumerate';
import { extend } from '../../extend';

extend({ array: [enumerate] });

describe('Array.prototype.enumerate', () => {
  type TestSuccess = [string, number[], [undefined | number, undefined | number][]];
  test.each<TestSuccess>([
    ['[].enumerate()', [], []],
    ['[0].enumerate()', [0], [[0, 0]]],
    ['[1, 2, 3].enumerate()', [1, 2, 3], [[0, 1], [1, 2], [2, 3]]],
  ])('%s', (_, a, expected) => {
    const d = a.enumerate();

    expect(d).toEqual(expected!);
  });

});
