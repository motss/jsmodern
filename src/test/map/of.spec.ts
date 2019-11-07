import { extend } from '../../extend.ts';
import { of } from '../../map/of.ts';

extend({ map: [of] });

describe('Map.of', () => {
  const errorMessage = new TypeError(`A Map entry in a list [key, value]`);

  type TestError = [string, any, TypeError];
  test.each<TestError>([
    ['.of()', undefined, errorMessage],
    ['.of(null)', null, errorMessage],
    ['.of(0)', 0, errorMessage],
    ['.of(NaN)', NaN, errorMessage],
    ['.of(Infinity)', Infinity, errorMessage],
    [`.of(Promise.resolve(1))`, Promise.resolve(1), errorMessage],
    [`.of(true)`, true, errorMessage],
    [`.of('a')`, 'a', errorMessage],
    [`.of(class A {})`, class A {}, errorMessage],
    [`.of(new Error())`, new Error(), errorMessage],
    [`.of({})`, {}, errorMessage],
    [`.of({ a: 1 })`, { a: 1 }, errorMessage],
    [`.of(() => {})`, () => void 0, errorMessage],
    [`.of(function () {})`, function a() { return void 0; }, errorMessage],
    [`.of(() => Promise.resolve(1))`, () => Promise.resolve(1), errorMessage],
    [`.of(async () => {})`, async () => void 0, errorMessage],
    [`.of(async function () {})`, async function a() { return void 0; }, errorMessage],
    [`.of(Symbol('a'))`, Symbol('a'), errorMessage],
    [`.of(new Map())`, new Map(), errorMessage],
  ])('%s', (_, a, expected) => {
    try {
      Map.of(a!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, any, Map<number, number>, number];
  test.each<TestSuccess>([
    ['.of([])', [], new Map(), 0],

    ['.of([[1, 1]])', [[1, 1]], new Map([[1, 1]]), 1],
    ['.of([[1, 1], [2, 2]])', [[1, 1], [2, 2]], new Map([[1, 1], [2, 2]]), 2],
  ])('%s', (_, a, expected, f) => {
    const d = Map.of(...a);

    expect(d).toEqual(expected);
    expect(d.size).toStrictEqual(f);
  });

});
