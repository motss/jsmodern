import { extend } from '../../extend';
import { divModFloor } from '../../number/div-mod-floor';

extend({ number: [divModFloor] });

describe('Number.prototype.divModFloor', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`);

  type TestError = [string, number, number | null, Error];
  test.each<TestError>([
    ['8.divModFloor(null)', 8, null, errorMessage],
    ['8.divModFloor(0)', 8, 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.divModFloor(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number, number | null, number[]];
  test.each<TestSuccess>([
    ['8.divModFloor(3)', 8, 3, [2, 2]],
    ['8.divModFloor(-3)', 8, -3, [-3, -1]],
    ['-8.divModFloor(3)', -8, 3, [-3, 1]],
    ['-8.divModFloor(-3)', -8, -3, [2, -2]],

    ['1.divModFloor(2)', 1, 2, [0, 1]],
    ['1.divModFloor(-2)', 1, -2, [-1, -1]],
    ['-1.divModFloor(2)', -1, 2, [-1, 1]],
    ['-1.divModFloor(-2)', -1, -2, [0, -1]],
  ])('%s', (_, a, b, expected) => {
    const d = a.divModFloor(b!);

    expect(d).toStrictEqual(expected);
  });
});
