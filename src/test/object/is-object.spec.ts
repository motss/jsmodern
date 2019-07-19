import { extend } from '../../extend';
import { isObject } from '../../object/is-object';

extend({ object: [isObject] });

describe('Object.isObject', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isObject()', undefined, false],
    ['.isObject(null)', null, false],
    ['.isObject(0)', 0, false],
    ['.isObject(NaN)', NaN, false],
    ['.isObject(Infinity)', Infinity, false],
    [`.isObject(Symbol('a'))`, Symbol('a'), false],
    [`.isObject([])`, [], false],
    [`.isObject(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isObject(() => {})`, () => void 0, false],
    [`.isObject(function () {})`, function a() { return void 0; }, false],
    [`.isObject(async function () {})`, async function a() { return void 0; }, false],
    [`.isObject(true)`, true, false],
    [`.isObject('a')`, 'a', false],
    [`.isObject(class A {})`, class A {}, false],
    [`.isObject(new Error())`, new Error(), false],

    [`.isObject({})`, {}, true],
    [`.isObject({ a: 1 })`, { a: 1 }, true],
  ])('%s', (_, a, expected) => {
    const d = Object.isObject(a);

    expect(d).toStrictEqual(expected!);
  });
});
