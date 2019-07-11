import { len, LenFn } from '../../set/len';

const { label, fn } = len;

Object.defineProperty(Set.prototype, label, { value: fn });

describe('Set.prototype.len', () => {
  type TestSuccess = [string, Set<number>, number];
  test.each<TestSuccess>([
    ['set {}.len()', new Set(), 0],
    ['set {}.len()', new Set<number>([]), 0],
    ['set {2, 1, 2}.len()', new Set([2, 1, 2]), 2],
    ['set {1, 2, 3}.len()', new Set([1, 2, 3]), 3],
  ])('%s', (_, a, expected) => {
    const d = a.len();

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Set<T> {
    len: LenFn;
  }
}
