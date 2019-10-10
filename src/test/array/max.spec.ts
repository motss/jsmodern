import { max } from '../../array/max.js';
import { extend } from '../../extend.js';

extend({ array: [max] });

describe('Array.prototype.max', () => {
  type TestSuccess = [string, (number | string)[], undefined | number | string];
  test.each<TestSuccess>([
    ['[].max()', [], void 0],
    ['[0].max()', [0], 0],
    ['[0, 1, 2].max()', [0, 1, 2], 2],
    ['[0, 2, 1, 2].max()', [0, 2, 1, 2], 2],
    ['[3, 99, 0].max()', [3, 99, 0], 99],
    [`['a', 'b', 'c'].max()`, ['a', 'b', 'c'], 'c'],
    [`['a', 'z', 'c'].max()`, ['a', 'z', 'c'], 'z'],
    [`['a', 'z', 222].max()`, ['a', 'z', 222], 222],
    [`['a', 'z', 2].max()`, ['a', 'z', 2], 'z'],
    [`['aa', 'z', 2].max()`, ['aa', 'z', 2], 'z'],
    [`['aa', 'zz', 'ccc'].max()`, ['aa', 'zz', 'ccc'], undefined],
  ])('%s', (_, a, expected) => {
    const d = a.max();

    expect(d).toStrictEqual(expected!);
  });

});
