import { range, RangeFn } from '../../number/range.js';

const { label, fn } = range;

Object.defineProperty(Number, label, { value: fn });

describe('Number.range', () => {
  type TestError = [string, number | null, number | null, number | null, Error];
  test.each<TestError>([
    // tslint:disable: max-line-length
    [`null 'start'`, null, null, null, new TypeError(`Expect 'start' to be of type number`)],
    [`null 'end'`, 0, null, 1, new TypeError(`Expect 'end' to be of type number`)],
    [`null 'step'`, 0, 5, null, new TypeError(`Expect 'step' to be of type number`)],
    [`negative 'start'`, -1, null, null, new TypeError(`'start' cannot be less than 0`)],

    [`negative 'start', smaller negative 'end'`, -3, -6, null, new RangeError(`Invalid array length`)],
    [`negative 'start', positive 'end', negative 'step'`, -3, 3, -2, new RangeError(`Invalid array length`)],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, c, expected) => {
    try {
      Number.range(a!, b!, c!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, number | null, number | null, number | null, number[]];
  test.each<TestSuccess>([
    [`positive 'start'`, 6, null, null, [0, 1, 2, 3, 4, 5]],
    [`positive 'start', positive 'end'`, 0, 6, null, [0, 1, 2, 3, 4, 5]],
    [`positive 'start', positive 'end', positive 'step'`, 0, 6, 2, [0, 2, 4]],

    [`negative 'start', positive 'end'`, -3, 3, null, [-3, -2, -1, 0, 1, 2]],
    [`negative 'start', negative 'end'`, -3, -1, null, [-3, -2]],

    [`negative 'start', positive 'end', positive 'step'`, -3, 3, 2, [-3, -1, 1]],
    [`negative 'start', negative 'end', positive 'step'`, -6, -1, 2, [-6, -4, -2]],
  ])('%s', (_, a, b, c, expected) => {
    const d = Number.range(a!, b!, c!);

    expect(d).toEqual(expected);
  });
});

declare global {
  interface NumberConstructor {
    range: RangeFn;
  }
}
