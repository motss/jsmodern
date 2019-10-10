import { endsWith } from '../../array/ends-with.js';
import { extend } from '../../extend.js';

extend({ array: [endsWith] });

describe('Array.prototype.endsWith', () => {
  const errorMessage = new TypeError(`Expect 'needle' to be an array`);

  // tslint:disable-next-line: max-line-length
  type TestError = [string, number[], undefined | null | number, TypeError];
  test.each<TestError>([
    ['.endsWith()', [], undefined, errorMessage],
    ['.endsWith(null)', [], null, errorMessage],
    ['.endsWith(0)', [], 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.endsWith(b! as unknown as any[]);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, number[], number[], boolean];
  test.each<TestSuccess>([
    ['[].endsWith([])', [], [], true],
    ['[0].endsWith([])', [0], [], true],

    ['[0].endsWith([0])', [0], [0], true],
    ['[0].endsWith([1])', [0], [1], false],
    ['[0].endsWith([1, 2])', [0], [1, 2], false],
    ['[1, 2, 3].endsWith([1, 3])', [1, 2, 3], [1, 3], false],

    ['[1, 2, 3].endsWith([3])', [1, 2, 3], [3], true],
    ['[1, 2, 3].endsWith([2, 3])', [1, 2, 3], [2, 3], true],
    ['[1, 2, 3].endsWith([1, 2, 3])', [1, 2, 3], [1, 2, 3], true],
  ])('%s', (_, a, b, expected) => {
    const d = a.endsWith(b!);

    expect(d).toStrictEqual(expected!);
  });

});
