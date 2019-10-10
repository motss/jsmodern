import { extend } from '../../extend.js';
import { isFunction } from '../../function/is-function.js';

extend({ function: [isFunction] });

describe('Function.isFunction', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isFunction()', undefined, false],
    ['.isFunction(null)', null, false],
    ['.isFunction(0)', 0, false],
    ['.isFunction(NaN)', NaN, false],
    ['.isFunction(Infinity)', Infinity, false],
    [`.isFunction(Symbol('a'))`, Symbol('a'), false],
    [`.isFunction([])`, [], false],
    [`.isFunction(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isFunction(true)`, true, false],
    [`.isFunction('a')`, 'a', false],
    [`.isFunction(new Error())`, new Error(), false],
    [`.isFunction({})`, {}, false],
    [`.isFunction({ a: 1 })`, { a: 1 }, false],

    [`.isFunction(async () => {})`, async () => void 0, true],
    [`.isFunction(async function () {})`, async function a() { return void 0; }, true],
    [`.isFunction(() => {})`, () => void 0, true],
    [`.isFunction(function () {})`, function a() { return void 0; }, true],
    [`.isFunction(class A {})`, class A {}, true],
  ])('%s', (_, a, expected) => {
    const d = Function.isFunction(a);

    expect(d).toStrictEqual(expected!);
  });
});
