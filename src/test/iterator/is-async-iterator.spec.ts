import { extend } from '../../extend.ts';
import { isAsyncIterator } from '../../iterator/is-async-iterator.ts';
import { hasAsyncIter } from '../feature-detect.ts';

extend({ iterator: [isAsyncIterator] });

describe('Iterator.isAsyncIterator', () => {
  hasAsyncIter();

  type TestSUccess = [string, any, boolean];
  test.each<TestSUccess>([
    ['.isAsyncIterator()', undefined, false],
    ['.isAsyncIterator(null)', null, false],
    ['.isAsyncIterator(0)', 0, false],
    ['.isAsyncIterator(NaN)', NaN, false],
    ['.isAsyncIterator(Infinity)', Infinity, false],
    [`.isAsyncIterator(Symbol('a'))`, Symbol('a'), false],
    [`.isAsyncIterator([])`, [], false],
    [`.isAsyncIterator(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isAsyncIterator(true)`, true, false],
    [`.isAsyncIterator('a')`, 'a', false],
    [`.isAsyncIterator(new Error())`, new Error(), false],
    [`.isAsyncIterator({})`, {}, false],
    [`.isAsyncIterator({ a: 1 })`, { a: 1 }, false],
    [`.isAsyncIterator(async () => {})`, async () => void 0, false],
    [`.isAsyncIterator(async function () {})`, async function a() { return void 0; }, false],
    [`.isAsyncIterator(() => {})`, () => void 0, false],
    [`.isAsyncIterator(function () {})`, function a() { return void 0; }, false],
    [`.isAsyncIterator(class A {})`, class A {}, false],
    [`.isAsyncIterator(function* () {})`, function* a() { yield 1; }, false],

    [`.isAsyncIterator(async function* () {})`, async function* a() { yield 1; }, true],
  ])('%s', (_, a, expected) => {
    const d = global.isAsyncIterator(
      'function' === typeof(a) && 'class A {}' !== a.toString() ? a() : a
    );

    expect(d).toStrictEqual(expected!);
  });

});
