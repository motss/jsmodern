import { symmetricDifference, SymmetricDifferenceFn } from '../../set/symmetric-difference';

const { label, fn } = symmetricDifference;

Object.defineProperty(Set.prototype, label, { value: fn });

describe('Set.prototype.symmetricDifference', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.symmetricDifference()', new Set(), undefined, errorMessage],
    ['set {}.symmetricDifference(null)', new Set(), null, errorMessage],
    ['set {}.symmetricDifference(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.symmetricDifference(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.symmetricDifference(set {})', new Set(), new Set(), []],
    ['set {}.symmetricDifference(new Set([]))', new Set(), new Set<number>([]), []],
    ['set {}.symmetricDifference(set {1, 2})', new Set(), new Set([1, 2]), [1, 2]],
    ['set {1, 2}.symmetricDifference(set {})', new Set([1, 2]), new Set(), [1, 2]],
    ['set {1, 2}.symmetricDifference(new Set([]))', new Set([1, 2]), new Set<number>([]), [1, 2]],
    ['set {1, 2}.symmetricDifference(set {1, 2})', new Set([1, 2]), new Set([1, 2]), []],
    ['set {1, 2}.symmetricDifference(set {1, 2, 3})', new Set([1, 2]), new Set([1, 2, 3]), [3]],
    ['set {1, 2, 3}.symmetricDifference(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), [3]],
    ['set {1, 2, 3}.symmetricDifference(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), [1, 4, 5]],
    ['set {4, 2, 3, 5}.symmetricDifference(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), [4, 5, 1]],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.symmetricDifference(b);

    expect(d).toEqual(expected!);
  });

});

declare global {
  interface Set<T> {
    symmetricDifference: SymmetricDifferenceFn<T>;
  }
}
