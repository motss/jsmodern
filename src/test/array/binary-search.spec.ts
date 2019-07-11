import { binarySearch, BinarySearchFn } from '../../array/binary-search';

const { label, fn } = binarySearch;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.binarySearch', () => {
  type TestSuccess = [string, number[], undefined | null | number, number];
  test.each<TestSuccess>([
    ['[].binarySearch()', [], undefined, -1],
    ['[].binarySearch(null)', [], null, -1],
    ['[].binarySearch(0)', [], 0, -1],
    ['[3].binarySearch(cb)', [3], 2, -1],
    ['[1, 2, 3].binarySearch()', [1, 2, 3], 0, -1],

    ['[1, 2, 3].binarySearch(3)', [1, 2, 3], 3, 2],
    ['[3].binarySearch(3)', [3], 3, 0],
    ['[3, 4].binarySearch(4)', [3, 4], 4, 1],
    ['[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].binarySearch(3)', [1, 2, 3, 4, 5, 6, 7, 8, 10, 12], 3, 2],
    ['[1, 2, 4, 7, 3, 5, 6, 8, 9, 10].binarySearch(3)', [1, 2, 4, 7, 3, 5, 6, 8, 9, 10], 5, 5],
  ])('%s', (_, a, b, expected) => {
    const d = a.binarySearch(b!);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    binarySearch: BinarySearchFn<T>;
  }
}
