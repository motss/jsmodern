import { difference, DifferenceFn } from '../../set/difference';

const { label, fn } = difference;

Object.defineProperty(Set.prototype, label, { value: fn });

describe('Set.prototype.difference', () => {
  const errorMessage = new TypeError(`Expect 'other' to be a Set`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, Set<number>, any, TypeError];
  test.each<TestError>([
    ['set {}.difference()', new Set(), undefined, errorMessage],
    ['set {}.difference(null)', new Set(), null, errorMessage],
    ['set {}.difference(new WeakSet())', new Set(), new WeakSet(), errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.difference(b!);
    } catch (e) {
      expect(e).toEqual(expected!);
    }
  });

  // tslint:disable: max-line-length
  type TestSuccess = [string, Set<number>, Set<number>, number[]];
  test.each<TestSuccess>([
    ['set {}.difference(set {})', new Set(), new Set(), []],
    ['set {}.difference(new Set([]))', new Set(), new Set<number>([]), []],
    ['set {}.difference(set {1, 2})', new Set(), new Set([1, 2]), []],
    ['set {1, 2}.difference(set {})', new Set([1, 2]), new Set(), [1, 2]],
    ['set {1, 2}.difference(new Set([]))', new Set([1, 2]), new Set<number>([]), [1, 2]],
    ['set {1, 2}.difference(set {1, 2})', new Set([1, 2]), new Set([1, 2]), []],
    ['set {1, 2}.difference(set {1, 2, 3}))', new Set([1, 2]), new Set([1, 2, 3]), []],
    ['set {1, 2, 3}.difference(set {1, 2})', new Set([1, 2, 3]), new Set([1, 2]), [3]],
    ['set {1, 2, 3}.difference(set {4, 2, 3, 5})', new Set([1, 2, 3]), new Set([4, 2, 3, 5]), [1]],
    ['set {4, 2, 3, 5}.difference(set {1, 2, 3})', new Set([4, 2, 3, 5]), new Set([1, 2, 3]), [4, 5]],
  ])('%s', (_, a, b, expected) => {
  // tslint:enable: max-line-length
    const d = a.difference(b);

    expect(d).toEqual(expected!);
  });

});

declare global {
  interface Set<T> {
    difference: DifferenceFn<T>;
  }
}
