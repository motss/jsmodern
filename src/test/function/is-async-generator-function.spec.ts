import { extend } from '../../extend.js';
import { isAsyncGeneratorFunction } from '../../function/is-async-generator-function.js';
import { hasAsync, hasAsyncIter } from '../feature-detect.js';

extend({ function: [isAsyncGeneratorFunction] });

describe('Function.isAsyncGeneratorFunction', () => {
  const trueIfAsync = hasAsync() && hasAsyncIter();

  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    // tslint:disable: max-line-length
    ['.isAsyncGeneratorFunction()', undefined, false],
    ['.isAsyncGeneratorFunction(null)', null, false],
    ['.isAsyncGeneratorFunction(0)', 0, false],
    ['.isAsyncGeneratorFunction(NaN)', NaN, false],
    ['.isAsyncGeneratorFunction(Infinity)', Infinity, false],
    [`.isAsyncGeneratorFunction(Symbol('a'))`, Symbol('a'), false],
    [`.isAsyncGeneratorFunction([])`, [], false],
    [`.isAsyncGeneratorFunction(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isAsyncGeneratorFunction(true)`, true, false],
    [`.isAsyncGeneratorFunction('a')`, 'a', false],
    [`.isAsyncGeneratorFunction(class A {})`, class A {}, false],
    [`.isAsyncGeneratorFunction(new Error())`, new Error(), false],
    [`.isAsyncGeneratorFunction({})`, {}, false],
    [`.isAsyncGeneratorFunction({ a: 1 })`, { a: 1 }, false],
    [`.isAsyncGeneratorFunction(() => {})`, () => void 0, false],
    [`.isAsyncGeneratorFunction(function () {})`, function a() { return void 0; }, false],
    [`.isAsyncGeneratorFunction(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isAsyncGeneratorFunction(async () => {})`, async () => void 0, false],
    [`.isAsyncGeneratorFunction(async function () {})`, async function a() { return void 0; }, false],

    [`.isAsyncGeneratorFunction(async function* () {})`, async function* a() { return void 0; }, trueIfAsync],
    // tslint:disable: max-line-length
  ])('%s', (_, a, expected) => {
    const d = Function.isAsyncGeneratorFunction(a);

    expect(d).toStrictEqual(expected!);
  });
});
