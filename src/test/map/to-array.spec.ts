import { toArray, ToArrayFn } from '../../map/to-array';

const { label, fn } = toArray;

Object.defineProperty(Map.prototype, label, { value: fn });

describe('Map.prototype.toArray', () => {
  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, Map<number, number>, [number, number][]];
  test.each<TestSuccess>([
    ['{}.toArray()', new Map(), []],
    ['{}.toArray(null)', new Map(), []],
    ['{1=>1}.toArray()', new Map([[1, 1]]), [[1, 1]]],
    ['{1=>1, 2=>2}.toArray()', new Map([[1, 1], [2, 2]]), [[1, 1], [2, 2]]],
  ])('%s', (_, a, expected) => {
    const d = a.toArray();

    expect(d).toEqual(expected!);
  });

});

declare global {
  interface Map<K, V> {
    toArray: ToArrayFn<K, V>;
  }
}
