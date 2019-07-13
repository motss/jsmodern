import { extend } from '../../extend';
import { toArray } from '../../set/to-array';

extend({ set: [toArray] });

describe('Set.prototype.toArray', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.iter()', new Set(), []],
    ['set {}.iter()', new Set<number>([]), []],
    ['set {2, 1, 2}.iter()', new Set([2, 1, 2]), [2, 1]],
    ['set {1, 2, 3}.iter()', new Set([1, 2, 3]), [1, 2, 3]],
  ])('%s', (_, a, expected) => {
    const d = a.toArray();

    expect(d).toEqual(expected!);
  });

});
