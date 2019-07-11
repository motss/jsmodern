import { toArray, ToArrayFn } from '../../set/to-array';

const { label, fn } = toArray;

Object.defineProperty(Set.prototype, label, { value: fn });

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

declare global {
  interface Set<T> {
    toArray: ToArrayFn<T>;
  }
}
