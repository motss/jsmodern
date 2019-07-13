import { truncate } from '../../array/truncate';
import { extend } from '../../extend';

extend({ array: [truncate] });

describe('Array.prototype.truncate', () => {
  const errorMessage = new TypeError(`Expect 'len' to be in the range of 0 and length of array`);

  type TestError = [string, number[], null | undefined | number, Error];
  test.each<TestError>([
    ['[].truncate()', [], undefined, errorMessage],
    ['[].truncate(null)', [], null, errorMessage],
    ['[].truncate(-1)', [], -1, errorMessage],
    ['[].truncate(1)', [], 1, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.truncate(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number[], number, number[]];
  test.each<TestSuccess>([
    ['.truncate(0)', [], 0, []],
    ['.truncate(0)', [1, 2], 0, []],
    ['.truncate(1)', [1, 2], 1, [1]],
    ['.truncate(2)', [1, 2], 2, [1, 2]],
  ])('%s', (_, a, b, expected) => {
    a.truncate(b);

    expect(a).toEqual(expected);
  });

});
