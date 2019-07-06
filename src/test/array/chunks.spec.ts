import { chunks, ChunksFn } from '../../array/chunk';

const { label, fn } = chunks;

Object.defineProperty(Array.prototype, label, { value: fn });

describe('Array.prototype.chunks', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Expect 'chunkSize' to be a number that is at least 1`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, number[], undefined | null | number, TypeError];
  test.each<TestError>([
    ['.chunks()', [], undefined, errorMessage],
    ['.chunks(null)', [], null, errorMessage],
    ['.chunks(-1)', [], -1, errorMessage],
    ['.chunks(0)', [], 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.chunks(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, number[], number, number[] | number[][]];
  test.each<TestSuccess>([
    ['[].chunks(1)', [], 1, []],
    ['[0].chunks(1)', [0], 1, [[0]]],
    ['[1, 2].chunks(1)', [1, 2], 1, [[1], [2]]],
    ['[1, 2].chunks(2)', [1, 2], 2, [[1, 2]]],
    ['[1, 2, 3].chunks(2)', [1, 2, 3], 2, [[1, 2], [3]]],
  ])('%s', (_, a, b, expected) => {
    const d = a.chunks(b!);

    expect(d).toEqual(expected!);
  });

});

declare global {
  interface Array<T> {
    chunks: ChunksFn<T>;
  }
}
