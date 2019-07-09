import { isEmpty, IsEmptyFn } from '../../map/is-empty';

const { label, fn } = isEmpty;

Object.defineProperty(Map.prototype, label, { value: fn });

describe('Map.prototype.isEmpty', () => {
  type TestSuccess = [string, Map<number, number>, boolean];
  test.each<TestSuccess>([
    ['{}.isEmpty()', new Map(), true],
    ['{1=>1, 2=>2}.isEmpty()', new Map([[1, 1], [2, 2]]), false],
  ])('%s', (_, a, expected) => {
    const d = a.isEmpty();

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Map<K, V> {
    isEmpty: IsEmptyFn;
  }
}
