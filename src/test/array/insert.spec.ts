import { insert } from '../../array/insert.ts';
import { extend } from '../../extend.ts';

extend({ array: [insert] });

describe('Array.prototype.insert', () => {
  const errorMessage = new TypeError('Array index out of bound');

  type TestError = [string, any[], null | undefined | number, Error];
  test.each<TestError>([
    ['.insert(undefined)', [], undefined, errorMessage],
    ['.insert(null)', [], null, errorMessage],
    ['.insert(-1)', [], -1, errorMessage],
    ['.insert(1)', [], -1, errorMessage],
    ['.insert(Infinity)', [], Infinity, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      // @ts-ignore
      a.insert(b);

      expect(a).toEqual([]);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, any[], number, any, any[]];
  test.each<TestSuccess>([
    ['.insert(0, 1)', [], 0, 1, [1]],
    ['.insert(1, 1)', [1, 2], 1, 1, [1, 1, 2]],
    ['.insert(2, 1)', [1, 2], 2, 1, [1, 2, 1]],
  ])('%s', (_, a, b, c, expected) => {
    a.insert(b, c);

    expect(a).toEqual(expected);
  });
});
