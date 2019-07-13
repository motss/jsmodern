import { extend } from '../../extend';
import { intersection } from '../../set/intersection';

extend({ set: [intersection] });

describe('Set.prototype.intersection', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.intersection()', new Set(), undefined, errorMessage],
    ['set {}.intersection(null)', new Set(), null, errorMessage],
    ['set {}.intersection(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.intersection(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.intersection(set {})', new Set(), new Set(), []],
    ['set {}.intersection(new Set([]))', new Set(), new Set<number>([]), []],
    ['set {1, 2}.intersection(new Set([]))', new Set([1, 2]), new Set<number>([]), []],
    ['set {}.intersection(set {1, 2})', new Set(), new Set([1, 2]), []],
    ['set {1, 2}.intersection(set {})', new Set([1, 2]), new Set(), []],

    ['set {1, 2}.intersection(set {1, 2})', new Set([1, 2]), new Set([1, 2]), [1, 2]],
    ['set {1, 2}.intersection(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), [1, 2]],
    ['set {1, 2, 3}.intersection(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), [1, 2]],
    ['set {1, 2, 3}.intersection(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), [2, 3]],
    ['set {4, 2, 3, 5}.intersection(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), [2, 3]],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.intersection(b);

    expect(d).toEqual(expected!);
  });

});
