import { len } from '../../array/len.ts';
import { extend } from '../../extend.ts';

extend({ array: [len] });

describe('Array.prototype.len', () => {
  type TestSuccess = [string, number[], number];
  test.each<TestSuccess>([
    ['[].len()', [], 0],
    ['[1, 2].len()', [1, 2], 2],
  ])('%s', (_, a, expected) => {
    const d = a.len();

    expect(d).toStrictEqual(expected);
  });
});
