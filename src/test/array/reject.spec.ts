import { reject } from '../../array/reject.ts';
import { extend } from '../../extend.ts';

extend({ array: [reject] });

describe('Array.prototype.reject', () => {
  const errorMessage = new TypeError(`Expect 'callbackFn' to be a function`);

  type TestError = [string, number[], null | undefined, Error];
  test.each<TestError>([
    ['[].reject()', [], undefined, errorMessage],
    ['[].reject(null)', [], null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.reject(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  const cb = (n: number): boolean => n > 2;

  type TestSuccess = [string, unknown, number[], number];
  test.each<TestSuccess>([
    ['[].reject()', [], [], 0],
    ['[1].reject()', [1], [1], 1],
    ['[1, 2].reject()', [1, 2], [1, 2], 2],
    ['[1, 2, 3].reject()', [1, 2, 3], [1, 2], 2],
  ])('%s', (_, a, b, expected) => {
    const d = (a as unknown as number[]).reject(cb);

    expect(d).toEqual(b);
    expect(d.length).toEqual(expected);
  });

});
