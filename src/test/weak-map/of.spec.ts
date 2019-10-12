import { extend } from '../../extend.js';
import { of } from '../../weak-map/of.js';

extend({ weakMap: [of] });

describe('WeakMap.of', () => {
  const errorMessage = new TypeError(`A WeakMap entry must contain [key, value] where key must be an object`);

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
    [`.of([[1, 1]])`, [[1, 1]], errorMessage],
  ])('%s', (_, a, expected) => {
    try {
      WeakMap.of(a!);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  const key1 = {};
  const key2 = {};

  type TestSuccess = [string, [object, number][]];
  test.each<TestSuccess>([
    ['.of([])', []],

    ['.of([key1, 1])', [[key1, 1]]],
    ['.of([key1, 1], [key2, 2])', [[key1, 1], [key2, 2]]],
  ])('%s', (_, expected) => {
    const d = WeakMap.of(...expected);

    expect(expected.every(([k, v]) => {
      return d.has(k) && d.get(k) === v;
    })).toStrictEqual(true);
  });

});
