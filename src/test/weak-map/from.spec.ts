import { extend } from '../../extend.js';
import { from } from '../../weak-map/from.js';

extend({ weakMap: [from] });

describe('WeakMap.from', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid WeakMap entries. Each WeakMap entry must contain [key, value] where key must be an object`);
  const weakMapKeyNotObjectErrorMessage = new TypeError(`WeakMap key must be an object`);

  type TestError = [string, any, TypeError];
  test.each<TestError>([
    ['.from()', undefined, errorMessage],
    ['.from(null)', null, errorMessage],
    ['.from(0)', 0, errorMessage],
    ['.from(NaN)', NaN, errorMessage],
    ['.from(Infinity)', Infinity, errorMessage],
    [`.from(Promise.resolve(1))`, Promise.resolve(1), errorMessage],
    [`.from(true)`, true, errorMessage],
    [`.from('a')`, 'a', errorMessage],
    [`.from(class A {})`, class A {}, errorMessage],
    [`.from(new Error())`, new Error(), errorMessage],
    [`.from({})`, {}, errorMessage],
    [`.from({ a: 1 })`, { a: 1 }, errorMessage],
    [`.from(() => {})`, () => void 0, errorMessage],
    [`.from(function () {})`, function a() { return void 0; }, errorMessage],
    [`.from(() => Promise.resolve(1))`, () => Promise.resolve(1), errorMessage],
    [`.from(async () => {})`, async () => void 0, errorMessage],
    [`.from(async function () {})`, async function a() { return void 0; }, errorMessage],
    [`.from(Symbol('a'))`, Symbol('a'), errorMessage],
    [`.from(new Map())`, new Map(), errorMessage],
    [`.from([[1, 1]]))`, [[1, 1]], weakMapKeyNotObjectErrorMessage],
  ])('%s', (_, a, expected) => {
    try {
      WeakMap.from(a);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  const mapFn = ([k, v]: [object, number]): [object, number] => [k, 1 + v];
  const key1 = {};
  const key2 = {};

  // tslint:disable-next-line: max-line-length
  type TestSuccess = [string, [object, number][], undefined | null | typeof mapFn, boolean, [object, number][]];
  test.each<TestSuccess>([
    ['.from([])', [], undefined, false, []],
    ['.from([], null)', [], null, false, []],
    ['.from([], mapFn)', [], mapFn, false, []],

    // tslint:disable: max-line-length
    ['.from([[key1, 1], [key2, 2]])', [[key1, 1], [key2, 2]], undefined, true, [[key1, 1], [key2, 2]]],
    ['.from([[key1, 1], [key2, 2]], null)', [[key1, 1], [key2, 2]], null, true, [[key1, 1], [key2, 2]]],
    ['.from([[key1, 1], [key2, 2]], mapFn)', [[key1, 1], [key2, 2]], mapFn, true, [[key1, 2], [key2, 3]]],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, c, expected) => {
    const d = WeakMap.from(a, b!);

    expect(d.has(key1)).toStrictEqual(c);
    expect(d.has(key2)).toStrictEqual(c);

    if (c) expect(expected.every(([k, v]) => d.get(k) === v)).toStrictEqual(true);
  });

});
