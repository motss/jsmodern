import { isSet, IsSetFn } from '../../set/is-set';

const { label, fn } = isSet;

Object.defineProperty(Set, label, { value: fn });

describe('Set.isSet', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isSet()', undefined, false],
    ['.isSet(null)', null, false],
    ['.isSet(0)', 0, false],
    ['.isSet(NaN)', NaN, false],
    ['.isSet(Infinity)', Infinity, false],
    [`.isSet([])`, [], false],
    [`.isSet(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isSet(true)`, true, false],
    [`.isSet('a')`, 'a', false],
    [`.isSet(class A {})`, class A {}, false],
    [`.isSet(new Error())`, new Error(), false],
    [`.isSet({})`, {}, false],
    [`.isSet({ a: 1 })`, { a: 1 }, false],
    [`.isSet(() => {})`, () => void 0, false],
    [`.isSet(function () {})`, function a() { return void 0; }, false],
    [`.isSet(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isSet(async () => {})`, async () => void 0, false],
    [`.isSet(async function () {})`, async function a() { return void 0; }, false],
    [`.isSet(Symbol('a'))`, Symbol('a'), false],
    [`.isSet(new Map())`, new Map(), false],
    [`.isSet(new WeakMap())`, new WeakMap(), false],
    [`.isSet(new WeakSet())`, new WeakSet(), false],

    [`.isSet(new Set())`, new Set(), true],
  ])('%s', (_, a, expected) => {
    const d = Set.isSet(a);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface SetConstructor {
    isSet: IsSetFn;
  }
}
