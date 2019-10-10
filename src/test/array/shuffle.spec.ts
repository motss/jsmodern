import { shuffle } from '../../array/shuffle.js';
import { extend } from '../../extend.js';

extend({ array: [shuffle] });

describe('Array.prototype.shuffle', () => {
  type TestSuccess = [string, number[], number[]];
  test.each<TestSuccess>([
    ['[].shuffle()', [], []],
    ['[1, 2].shuffle()', [1, 2], [1, 2]],
    ['[1, 2, 3].shuffle()', [1, 2, 3], [1, 2, 3]],
    ['[1, 2, 3, 4].shuffle()', [1, 2, 3, 4], [1, 2, 3, 4]],
  ])('%s', (_, a, expected) => {
    a.shuffle();

    expect(a.length).toStrictEqual(expected.length);
    expect(a.every(n => expected.includes(n))).toStrictEqual(true);
  });
});
