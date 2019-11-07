import { select } from '../../array/select.ts';
import { extend } from '../../extend.ts';

extend({ array: [select] });

describe('Array.prototype.select', () => {
  const errorMessage = new TypeError(`Expect 'callbackFn' to be a function`);

  type TestError = [string, number[], null | undefined, Error];
  test.each<TestError>([
    ['[].select()', [], undefined, errorMessage],
    ['[].select(null)', [], null, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.select(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  const cb = (n: number): boolean => n > 2;

  type TestSuccess = [string, unknown, number[], number];
  test.each<TestSuccess>([
    ['[].select()', [], [], 0],
    ['[1].select()', [1], [], 0],
    ['[1, 2].select()', [1, 2], [], 0],
    ['[1, 2, 3].select()', [1, 2, 3], [3], 1],
  ])('%s', (_, a, b, expected) => {
    const d = (a as unknown as number[]).select(cb);

    expect(d).toEqual(b);
    expect(d.length).toEqual(expected);
  });

});
