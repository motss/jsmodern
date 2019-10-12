import { extend } from '../../extend.js';
import { from } from '../../weak-set/from.js';

extend({ weakSet: [from] });

describe('WeakSet.from', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid WeakSet entries. Each WeakSet entry key must be an object`);
  const weakSetKeyNotObjectErrorMessage = new TypeError(`WeakSet key must be an object`);

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
    [`.from([1])`, [1], weakSetKeyNotObjectErrorMessage],
  ])('%s', (_, a, expected) => {
    try {
      WeakSet.from(a);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  const key1 = {};
  const key2 = {};

  type TestSuccess = [string, object[]];
  test.each<TestSuccess>([
    ['.from([])', []],

    ['.from([key1])', [key1]],
    ['.from([key1, key2])', [key1, key2]],
  ])('%s', (_, a) => {
    const d = WeakSet.from(a);

    expect(a.every(n => d.has(n))).toStrictEqual(true);
  });

});
