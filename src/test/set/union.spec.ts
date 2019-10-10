import { extend } from '../../extend.js';
import { union } from '../../set/union.js';

extend({ set: [union] });

describe('Set.prototype.union', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.union()', new Set(), undefined, errorMessage],
    ['set {}.union(null)', new Set(), null, errorMessage],
    ['set {}.union(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.union(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.union(set {})', new Set(), new Set(), []],
    ['set {}.union(new Set([]))', new Set(), new Set<number>([]), []],

    ['set {1, 2}.union(new Set([]))', new Set([1, 2]), new Set<number>([]), [1, 2]],
    ['set {}.union(set {1, 2})', new Set(), new Set([1, 2]), [1, 2]],
    ['set {1, 2}.union(set {})', new Set([1, 2]), new Set(), [1, 2]],
    ['set {1, 2}.union(set {1, 2})', new Set([1, 2]), new Set([1, 2]), [1, 2]],
    ['set {1, 2}.union(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), [1, 2, 3]],
    ['set {1, 2, 3}.union(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), [1, 2, 3]],
    ['set {1, 2, 3}.union(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), [1, 2, 3, 4, 5]],
    ['set {4, 2, 3, 5}.union(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), [4, 2, 3, 5, 1]],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.union(b);

    expect(d).toEqual(expected!);
  });

});
