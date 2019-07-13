import { extend } from '../../extend';
import { from } from '../../set/from';

extend({ set: [from] });

describe('Set.from', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Expect an array of Set elements`);

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
    [`.from(new Set())`, new Set(), errorMessage],
    [`.from(new Map())`, new Map(), errorMessage],
    [`.from(new WeakSet())`, new WeakSet(), errorMessage],
    [`.from(new WeakMap())`, new WeakMap(), errorMessage],
  ])('%s', (_, a, expected) => {
    try {
      Set.from(a);

      expect(false).toStrictEqual(true);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  const mapFn = (v: number): number => 1 + v;

  type TestSuccess = [string, any, undefined | null | typeof mapFn, Set<number>, number];
  test.each<TestSuccess>([
    ['.from([])', [], undefined, new Set(), 0],
    ['.from([], null)', [], null, new Set(), 0],
    ['.from([], mapFn)', [], mapFn, new Set(), 0],

    ['.from([1, 2, 3])', [1, 2, 3], undefined, new Set([1, 2, 3]), 3],
    ['.from([1, 2, 3], null)', [1, 2, 3], null, new Set([1, 2, 3]), 3],
    ['.from([1, 2, 3], mapFn)', [1, 2, 3], mapFn, new Set([2, 3, 4]), 3],
    ['.from([2, 1, 2], mapFn)', [2, 1, 2], mapFn, new Set([3, 2, 3]), 2],
  ])('%s', (_, a, b, expected, f) => {
    const d = Set.from(a, b!);

    expect(d).toEqual(expected);
    expect(d.size).toStrictEqual(f);
  });

});
