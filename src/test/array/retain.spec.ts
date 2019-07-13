import { retain } from '../../array/retain';
import { extend } from '../../extend';

extend({ array: [retain] });

describe('Array.prototype.retain', () => {
  const errorMessage = new TypeError(`Expect 'callback' to be a function`);

  type TestError = [string, number[], null | undefined, Error];
  test.each<TestError>([
    ['[].retain()', [], undefined, errorMessage],
    ['[].retain(null)', [], null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.retain(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number[], (n: number) => boolean, number[]];
  test.each<TestSuccess>([
    ['[].retain(cb)', [], (n: number) => !(n % 2), []],
    ['[1, 2].retain()', [1, 2], (n: number) => !(n % 2), [2]],
  ])('%s', (_, a, b, expected) => {
    a.retain(b);

    expect(a).toEqual(expected);
  });
});
