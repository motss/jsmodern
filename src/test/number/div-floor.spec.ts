import { extend } from '../../extend.js';
import { divFloor } from '../../number/div-floor.js';

extend({ number: [divFloor] });

describe('Number.prototype.divFloor', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`);

  type TestError = [string, number, number | null, Error];
  test.each<TestError>([
    ['8.divFloor(null)', 8, null, errorMessage],
    ['8.divFloor(0)', 8, 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.divFloor(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number, number | null, number];
  test.each<TestSuccess>([
    ['8.divFloor(1)', 8, 1, 8],
    ['8.divFloor(3)', 8, 3, 2],
    ['8.divFloor(-3)', 8, -3, -3],
    ['-8.divFloor(3)', -8, 3, -3],
    ['-8.divFloor(-3)', -8, -3, 2],

    ['1.divFloor(2)', 1, 2, 0],
    ['1.divFloor(-2)', 1, -2, -1],
    ['-1.divFloor(2)', -1, 2, -1],
    ['-1.divFloor(-2)', -1, -2, 0],
  ])('%s', (_, a, b, expected) => {
    const d = a.divFloor(b!);

    expect(d).toStrictEqual(expected);
  });
});
