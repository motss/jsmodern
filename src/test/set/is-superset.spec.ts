import { extend } from '../../extend';
import { isSuperset } from '../../set/is-superset';

extend({ set: [isSuperset] });

describe('Set.prototype.isSuperset', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.isSuperset()', new Set(), undefined, errorMessage],
    ['set {}.isSuperset(null)', new Set(), null, errorMessage],
    ['set {}.isSuperset(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.isSuperset(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, boolean];
  test.each<TestSuccess>([
    ['set {}.isSuperset(set {})', new Set(), new Set(), true],
    ['set {}.isSuperset(new Set([]))', new Set(), new Set<number>([]), true],
    ['set {1, 2}.isSuperset(set {1, 2})', new Set([1, 2]), new Set([1, 2]), true],
    ['set {1, 2, 3}.isSuperset(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), true],
    ['set {1, 2}.isSuperset(set {})', new Set([1, 2]), new Set(), true],
    ['set {1, 2}.isSuperset(new Set([]))', new Set([1, 2]), new Set<number>([]), true],

    ['set {1, 2}.isSuperset(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), false],
    ['set {1, 2, 3}.isSuperset(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), false],
    ['set {4, 2, 3, 5}.isSuperset(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), false],

    ['set {}.isSuperset(set {1, 2})', new Set(), new Set([1, 2]), false],
    ['set {0}.isSuperset(set {1, 2})', new Set([0]), new Set([1, 2]), false],
    ['set {0, 1}.isSuperset(set {1, 2})', new Set([0, 1]), new Set([1, 2]), false],
    ['set {0, 1, 2}.isSuperset(set {1, 2})', new Set([0, 1, 2]), new Set([1, 2]), true],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.isSuperset(b);

    expect(d).toStrictEqual(expected!);
  });

});
