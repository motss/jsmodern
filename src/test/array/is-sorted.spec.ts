import { isSorted } from '../../array/is-sorted';
import { extend } from '../../extend';

extend({ array: [isSorted] });

describe('Array.prototype.isSorted', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, (number | string | null | undefined)[], boolean];
  test.each<TestSuccess>([
    ['[undefined].isSorted()', [undefined], true],
    ['[null].isSorted()', [null], true],
    ['[null, undefined].isSorted()', [null, void 0], false],
    ['[null, null].isSorted()', [null, null], false],

    ['[].isSorted()', [], true],
    ['[0].isSorted()', [0], true],
    ['[1, 2, 3].isSorted()', [1, 2, 3], true],
    [`[1, 2, 3, 'a'].isSorted()`, [1, 2, 3, 'a'], true],
    [`['a', 'b'].isSorted()`, ['a', 'b'], true],
    [`['b', 'a'].isSorted()`, ['b', 'a'], false],
    [`[1, undefined, null, 'a'].isSorted()`, [1, null, undefined, 'a'], false],
    [`[3, 2, 1].isSorted()`, [3, 2, 1], false],
  ])('%s', (_, a, expected) => {
    const d = a.isSorted();

    expect(d).toStrictEqual(expected!);
  });

});
