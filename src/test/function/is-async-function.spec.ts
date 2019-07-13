import { extend } from '../../extend';
import { isAsyncFunction } from '../../function/is-async-function';
import { hasAsync } from '../feature-detect';

extend({ function: [isAsyncFunction] });

describe('Function.isAsyncFunction', () => {
  const trueIfAsync = hasAsync();

  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isAsyncFunction()', undefined, false],
    ['.isAsyncFunction(null)', null, false],
    ['.isAsyncFunction(0)', 0, false],
    ['.isAsyncFunction(NaN)', NaN, false],
    ['.isAsyncFunction(Infinity)', Infinity, false],
    [`.isAsyncFunction(Symbol('a'))`, Symbol('a'), false],
    [`.isAsyncFunction([])`, [], false],
    [`.isAsyncFunction(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isAsyncFunction(true)`, true, false],
    [`.isAsyncFunction('a')`, 'a', false],
    [`.isAsyncFunction(class A {})`, class A {}, false],
    [`.isAsyncFunction(new Error())`, new Error(), false],
    [`.isAsyncFunction({})`, {}, false],
    [`.isAsyncFunction({ a: 1 })`, { a: 1 }, false],
    [`.isAsyncFunction(() => {})`, () => void 0, false],
    [`.isAsyncFunction(function () {})`, function a() { return void 0; }, false],
    [`.isAsyncFunction(() => Promise.resolve(1))`, () => Promise.resolve(1), false],

    [`.isAsyncFunction(async () => {})`, async () => void 0, trueIfAsync],
    [`.isAsyncFunction(async function () {})`, async function a() { return void 0; }, trueIfAsync],
  ])('%s', (_, a, expected) => {
    const d = Function.isAsyncFunction(a);

    expect(d).toStrictEqual(expected!);
  });

});
