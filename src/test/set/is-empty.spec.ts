import { isEmpty, IsEmptyFn } from '../../set/is-empty';

const { label, fn } = isEmpty;

Object.defineProperty(Set.prototype, label, { value: fn });

describe('Set.prototype.isEmpty', () => {
  type TestSuccess = [string, Set<number>, boolean];
  test.each<TestSuccess>([
    ['set {}.isEmpty()', new Set(), true],
    ['set {1, 2}.isEmpty()', new Set<number>([]), true],
    ['set {1, 2, 3}.isEmpty()', new Set([1, 2, 3]), false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Set<T> {
    isEmpty: IsEmptyFn;
  }
}
