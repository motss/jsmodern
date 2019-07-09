import { from, MapFrom } from '../../map/from';

const { label, fn } = from;

Object.defineProperty(Map, label, { value: fn });

describe('Map.from', () => {
  // tslint:disable-next-line: max-line-length
  const errorMessage = new TypeError(`Invalid map entries. Each map entry in a list must be an array of key/ value pairs.`);

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
  ])('%s', (_, a, expected) => {
    try {
      Map.from(a);
    } catch (e) {
      expect(e).toStrictEqual(expected!);
    }
  });

  const mapFn = ([k, v]: [number, number]): [number, number] => [k, 1 + v];

  type TestSuccess = [string, any, undefined | null | typeof mapFn, Map<number, number>, number];
  test.each<TestSuccess>([
    ['.from([])', [], undefined, new Map(), 0],
    ['.from([], null)', [], null, new Map(), 0],
    ['.from([], mapFn)', [], mapFn, new Map(), 0],

    ['.from([[1, 1], [2, 2]])', [[1, 1], [2, 2]], undefined, new Map([[1, 1], [2, 2]]), 2],
    ['.from([[1, 1], [2, 2]], null)', [[1, 1], [2, 2]], null, new Map([[1, 1], [2, 2]]), 2],
    ['.from([[1, 1], [2, 2]], mapFn)', [[1, 1], [2, 2]], mapFn, new Map([[1, 2], [2, 3]]), 2],
  ])('%s', (_, a, b, expected, f) => {
    const d = Map.from(a, b!);

    expect(d).toEqual(expected);
    expect(d.size).toStrictEqual(f);
  });

});

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface MapConstructor extends MapFrom {}
}
