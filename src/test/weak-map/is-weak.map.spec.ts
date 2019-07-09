import { isWeakMap, IsWeakMapFn } from '../../weak-map/is-weak-map';

const { label, fn } = isWeakMap;

Object.defineProperty(WeakMap, label, { value: fn });

describe('WeakMap.isWeakMap', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isWeakMap()', undefined, false],
    ['.isWeakMap(null)', null, false],
    ['.isWeakMap(0)', 0, false],
    ['.isWeakMap(NaN)', NaN, false],
    ['.isWeakMap(Infinity)', Infinity, false],
    [`.isWeakMap([])`, [], false],
    [`.isWeakMap(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isWeakMap(true)`, true, false],
    [`.isWeakMap('a')`, 'a', false],
    [`.isWeakMap(class A {})`, class A {}, false],
    [`.isWeakMap(new Error())`, new Error(), false],
    [`.isWeakMap({})`, {}, false],
    [`.isWeakMap({ a: 1 })`, { a: 1 }, false],
    [`.isWeakMap(() => {})`, () => void 0, false],
    [`.isWeakMap(function () {})`, function a() { return void 0; }, false],
    [`.isWeakMap(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isWeakMap(async () => {})`, async () => void 0, false],
    [`.isWeakMap(async function () {})`, async function a() { return void 0; }, false],
    [`.isWeakMap(Symbol('a'))`, Symbol('a'), false],
    [`.isWeakMap(new Map())`, new Map(), false],

    [`.isWeakMap(new WeakMap())`, new WeakMap(), true],
  ])('%s', (_, a, expected) => {
    const d = WeakMap.isWeakMap(a);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface WeakMapConstructor {
    isWeakMap: IsWeakMapFn;
  }
}
