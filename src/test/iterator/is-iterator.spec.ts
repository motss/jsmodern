import { extend } from '../../extend';
import { isIterator } from '../../iterator/is-iterator';

extend({ iterator: [isIterator] });

describe('Iterator.isIterator', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isIterator()', undefined, false],
    ['.isIterator(null)', null, false],
    ['.isIterator(0)', 0, false],
    ['.isIterator(NaN)', NaN, false],
    ['.isIterator(Infinity)', Infinity, false],
    [`.isIterator(Symbol('a'))`, Symbol('a'), false],
    [`.isIterator([])`, [], false],
    [`.isIterator(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isIterator(true)`, true, false],
    [`.isIterator('a')`, 'a', false],
    [`.isIterator(new Error())`, new Error(), false],
    [`.isIterator({})`, {}, false],
    [`.isIterator({ a: 1 })`, { a: 1 }, false],
    [`.isIterator(async () => {})`, async () => void 0, false],
    [`.isIterator(async function () {})`, async function a() { return void 0; }, false],
    [`.isIterator(() => {})`, () => void 0, false],
    [`.isIterator(function () {})`, function a() { return void 0; }, false],
    [`.isIterator(class A {})`, class A {}, false],
    [`.isIterator(async function* () {})`, async function* a() { yield 1; }, false],

    [`.isIterator(function* () {})`, function* a() { yield 1; }, true],
  ])('%s', (_, a, expected) => {
    const d = global.isIterator(
      'function' === typeof(a) && 'class A {}' !== a.toString() ? a() : a
    );

    expect(d).toStrictEqual(expected!);
  });
});
