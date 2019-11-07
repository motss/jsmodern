import { lastIndex } from '../../array/last-index.ts';
import { extend } from '../../extend.ts';

extend({ array: [lastIndex] });

describe('Array.prototype.lastIndex', () => {
  type TestSuccess = [string, number[], number];
  test.each<TestSuccess>([
    ['[].lastIndex()', [], 0],
    ['[1].lastIndex()', [1], 0],
    ['[1, 2].lastIndex()', [1, 2], 1],
  ])('%s', (_, a, expected) => {
    const d = a.lastIndex();
    expect(d).toStrictEqual(expected);
  });
});
