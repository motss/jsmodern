import { min } from '../../array/min.ts';
import { extend } from '../../extend.ts';

extend({ array: [min] });

describe('Array.prototype.min', () => {
  type TestSuccess = [string, (number | string)[], undefined | number | string];
  test.each<TestSuccess>([
    ['[].min()', [], void 0],
    ['[0].min()', [0], 0],
    ['[0, 1, 2].min()', [0, 1, 2], 0],
    ['[0, 1, 0, 2].min()', [0, 1, 1, 2], 0],
    ['[3, 99, 0].min()', [3, 99, 0], 0],
    [`['a', 'b', 'c'].min()`, ['a', 'b', 'c'], 'a'],
    [`['a', 'z', 'c'].min()`, ['a', 'z', 'c'], 'a'],
    [`['a', 'z', 222].min()`, ['a', 'z', 222], 'a'],
    [`['a', 'z', 2].min()`, ['a', 'z', 2], 2],
    [`['aa', 'z', 2].min()`, ['aa', 'z', 2], 2],
    [`['aa', 'zz', 'ccc'].min()`, ['aa', 'zz', 'ccc'], undefined],
  ])('%s', (_, a, expected) => {
    const d = a.min();

    expect(d).toStrictEqual(expected!);
  });

});
