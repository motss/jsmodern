import { extend } from '../../extend.ts';
import { isSubset } from '../../set/is-subset.ts';

extend({ set: [isSubset] });

describe('Set.prototype.isSubset', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.isSubset()', new Set(), undefined, errorMessage],
    ['set {}.isSubset(null)', new Set(), null, errorMessage],
    ['set {}.isSubset(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.isSubset(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, boolean];
  test.each<TestSuccess>([
    ['set {}.isSubset(set {})', new Set(), new Set(), true],
    ['set {}.isSubset(new Set([]))', new Set(), new Set<number>([]), true],
    ['set {}.isSubset(set {1, 2})', new Set(), new Set([1, 2]), true],
    ['set {1, 2}.isSubset(set {1, 2})', new Set([1, 2]), new Set([1, 2]), true],
    ['set {1, 2}.isSubset(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), true],

    ['set {1, 2}.isSubset(set {})', new Set([1, 2]), new Set(), false],
    ['set {1, 2}.isSubset(new Set([]))', new Set([1, 2]), new Set<number>([]), false],
    ['set {1, 2, 3}.isSubset(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), false],
    ['set {1, 2, 3}.isSubset(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), false],
    ['set {4, 2, 3, 5}.isSubset(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), false],

    ['set {2}.isSubset(set {1, 2, 3})', new Set([2]), new Set([1, 2, 3]), true],
    ['set {2, 4}.isSubset(set {1, 2, 3})', new Set([2, 4]), new Set([1, 2, 3]), false],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.isSubset(b);

    expect(d).toStrictEqual(expected!);
  });

});
