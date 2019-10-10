import { clear } from '../../array/clear.js';
import { extend } from '../../extend.js';

extend({ array: [clear] });

describe('Array.prototype.clear', () => {
  type TestSuccess = [string, any[], any[]];
  test.each<TestSuccess>([
    ['[].clear()', [], []],
    ['[1, 2].clear()', [], []],
    ['[{ a: 1 }, { b: 2 }].clear()', [{ a: 1 }, { b: 2 }], []],
  ])('%s', (_, a, expected) => {
    a.clear();

    expect(a).toEqual(expected);
  });
});
