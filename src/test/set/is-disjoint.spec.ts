import { extend } from '../../extend.js';
import { isDisjoint } from '../../set/is-disjoint.js';

extend({ set: [isDisjoint] });

describe('Set.prototype.isDisjoint', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.isDisjoint()', new Set(), undefined, errorMessage],
    ['set {}.isDisjoint(null)', new Set(), null, errorMessage],
    ['set {}.isDisjoint(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.isDisjoint(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, boolean];
  test.each<TestSuccess>([
    ['set {}.isDisjoint(set {})', new Set(), new Set(), true],
    ['set {}.isDisjoint(new Set([]))', new Set(), new Set<number>([]), true],
    ['set {1, 2}.isDisjoint(new Set([]))', new Set([1, 2]), new Set<number>([]), true],
    ['set {}.isDisjoint(set {1, 2})', new Set(), new Set([1, 2]), true],
    ['set {1, 2}.isDisjoint(set {})', new Set([1, 2]), new Set(), true],

    ['set {1, 2}.isDisjoint(set {1, 2})', new Set([1, 2]), new Set([1, 2]), false],
    ['set {1, 2}.isDisjoint(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), false],
    ['set {1, 2, 3}.isDisjoint(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), false],
    ['set {1, 2, 3}.isDisjoint(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), false],
    ['set {4, 2, 3, 5}.isDisjoint(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), false],

    ['set {1, 2, 3}.isDisjoint(set {4})', new Set([1, 2, 3]), new Set([4]), true],
    ['set {1, 2, 3}.isDisjoint(set {4, 1})', new Set([1, 2, 3]), new Set([4, 1]), false],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.isDisjoint(b);

    expect(d).toStrictEqual(expected!);
  });

});
