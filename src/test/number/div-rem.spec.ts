import { extend } from '../../extend.ts';
import { divRem } from '../../number/div-rem.ts';

extend({ number: [divRem] });

describe('Number.prototype.divRem', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`);

  type TestError = [string, number, number | null, Error];
  test.each<TestError>([
    ['8.divRem(null)', 8, null, errorMessage],
    ['8.divRem(0)', 8, 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.divRem(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }

  });

  type TestSuccess = [string, number, number | null, number[]];
  test.each<TestSuccess>([
    ['8.divRem(1)', 8, 1, [8, 0]],
    ['8.divRem(2)', 8, 2, [4, 0]],
    ['8.divRem(3)', 8, 3, [2, 2]],
  ])('%s', (_, a, b, expected) => {
    const d = a.divRem(b!);

    expect(d).toStrictEqual(expected);
  });
});
