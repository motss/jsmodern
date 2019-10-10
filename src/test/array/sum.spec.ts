import { sum } from '../../array/sum.js';
import { extend } from '../../extend.js';

extend({ array: [sum] });

describe('Array.prototype.sum', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, (number | string | null | undefined)[], null | undefined | number | string];
  test.each<TestSuccess>([
    ['[undefined].sum()', [undefined], undefined],
    ['[null].sum()', [null], null],
    ['[null, undefined].sum()', [null, void 0], NaN],
    ['[null, null].sum()', [null, null], 0],

    ['[].sum()', [], 0],
    ['[0].sum()', [0], 0],
    ['[1, 2, 3].sum()', [1, 2, 3], 6],
    [`[1, 2, 3, 'a'].sum()`, [1, 2, 3, 'a'], '6a'],
    [`[1, undefined, null, 'a'].sum()`, [1, null, undefined, 'a'], 'NaNa'],
  ])('%s', (_, a, expected) => {
    const d = a.sum();

    expect(d).toStrictEqual(expected!);
  });

});
