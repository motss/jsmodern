import { remove } from '../../array/remove.js';
import { extend } from '../../extend.js';

extend({ array: [remove] });

describe('Array.prototype.remove', () => {
  const errorMessage = new TypeError(`Array index out of bound`);

  type TestError = [string, number[], null | undefined | number, Error];
  test.each<TestError>([
    ['[].remove()', [], undefined, errorMessage],
    ['[].remove(null)', [], null, errorMessage],
    ['[].remove(-1)', [], -1, errorMessage],
    ['[].remove(0)', [], 0, errorMessage],
    ['[].remove(1)', [], 1, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.remove(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number[], number, number, number[]];
  test.each<TestSuccess>([
    ['.remove(0)', [1, 2], 0, 1, [2]],
    ['.remove(1)', [1, 2], 1, 2, [1]],
  ])('%s', (_, a, b, c, expected) => {
    const d = a.remove(b);

    expect(d).toEqual(c);
    expect(a).toEqual(expected);
  });
});
