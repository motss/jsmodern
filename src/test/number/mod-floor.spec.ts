import { modFloor, ModFloorFn } from '../../number/mod-floor.js';

const { label, fn } = modFloor;

Object.defineProperty(Number.prototype, label, { value: fn });

describe('Number.prototype.modFloor', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid 'divisor'. The value must be a number that is greater than zero`);

  type TestError = [string, number, number | null, Error];
  test.each<TestError>([
    ['8.modFloor(null)', 8, null, errorMessage],
    ['8.modFloor(0)', 8, 0, errorMessage],
  ])('%s', (_, a, b, expected) => {
    try {
      a.modFloor(b!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number, number | null, number];
  test.each<TestSuccess>([
    ['8.modFloor(1)', 8, 1, 0],
    ['8.modFloor(3)', 8, 3, 2],
    ['8.modFloor(-3)', 8, -3, -1],
    ['-8.modFloor(3)', -8, 3, 1],
    ['-8.modFloor(-3)', -8, -3, -2],

    ['1.modFloor(2)', 1, 2, 1],
    ['1.modFloor(-2)', 1, -2, -1],
    ['-1.modFloor(2)', -1, 2, 1],
    ['-1.modFloor(-2)', -1, -2, -1],
  ])('%s', (_, a, b, expected) => {
    const d = a.modFloor(b!);

    expect(d).toStrictEqual(expected);
  });
});

declare global {
  interface Number {
    modFloor: ModFloorFn;
  }
}
