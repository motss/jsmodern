import { extend } from '../../extend.js';
import { isMap } from '../../map/is-map.js';

extend({ map: [isMap] });

describe('Map.isMap', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isMap()', undefined, false],
    ['.isMap(null)', null, false],
    ['.isMap(0)', 0, false],
    ['.isMap(NaN)', NaN, false],
    ['.isMap(Infinity)', Infinity, false],
    [`.isMap([])`, [], false],
    [`.isMap(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isMap(true)`, true, false],
    [`.isMap('a')`, 'a', false],
    [`.isMap(class A {})`, class A {}, false],
    [`.isMap(new Error())`, new Error(), false],
    [`.isMap({})`, {}, false],
    [`.isMap({ a: 1 })`, { a: 1 }, false],
    [`.isMap(() => {})`, () => void 0, false],
    [`.isMap(function () {})`, function a() { return void 0; }, false],
    [`.isMap(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isMap(async () => {})`, async () => void 0, false],
    [`.isMap(async function () {})`, async function a() { return void 0; }, false],
    [`.isMap(Symbol('a'))`, Symbol('a'), false],

    [`.isMap(new Map())`, new Map(), true],
  ])('%s', (_, a, expected) => {
    const d = Map.isMap(a);

    expect(d).toStrictEqual(expected!);
  });

});
