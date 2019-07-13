import { extend } from '../../extend';
import { isWeakSet } from '../../weak-set/is-weak-set';

extend({ weakSet: [isWeakSet] });

describe('WeakSet.isWeakSet', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isWeakSet()', undefined, false],
    ['.isWeakSet(null)', null, false],
    ['.isWeakSet(0)', 0, false],
    ['.isWeakSet(NaN)', NaN, false],
    ['.isWeakSet(Infinity)', Infinity, false],
    [`.isWeakSet([])`, [], false],
    [`.isWeakSet(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isWeakSet(true)`, true, false],
    [`.isWeakSet('a')`, 'a', false],
    [`.isWeakSet(class A {})`, class A {}, false],
    [`.isWeakSet(new Error())`, new Error(), false],
    [`.isWeakSet({})`, {}, false],
    [`.isWeakSet({ a: 1 })`, { a: 1 }, false],
    [`.isWeakSet(() => {})`, () => void 0, false],
    [`.isWeakSet(function () {})`, function a() { return void 0; }, false],
    [`.isWeakSet(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isWeakSet(async () => {})`, async () => void 0, false],
    [`.isWeakSet(async function () {})`, async function a() { return void 0; }, false],
    [`.isWeakSet(Symbol('a'))`, Symbol('a'), false],
    [`.isWeakSet(new Map())`, new Map(), false],
    [`.isWeakSet(new WeakMap())`, new WeakMap(), false],
    [`.isWeakSet(new WeakMap())`, new Set(), false],

    [`.isWeakSet(new WeakMap())`, new WeakSet(), true],
  ])('%s', (_, a, expected) => {
    const d = WeakSet.isWeakSet(a);

    expect(d).toStrictEqual(expected!);
  });

});
