import { isBoolean } from '../../boolean/is-boolean.js';
import { extend } from '../../extend.js';

extend({ boolean: [isBoolean] });

describe('Boolean.isBoolean', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isBoolean()', undefined, false],
    ['.isBoolean(null)', null, false],
    ['.isBoolean(0)', 0, false],
    ['.isBoolean(NaN)', NaN, false],
    ['.isBoolean(Infinity)', Infinity, false],
    [`.isBoolean(Symbol('a'))`, Symbol('a'), false],
    [`.isBoolean([])`, [], false],
    [`.isBoolean(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isBoolean(() => {})`, () => void 0, false],
    [`.isBoolean(function () {})`, function a() { return void 0; }, false],
    [`.isBoolean(async function () {})`, async function a() { return void 0; }, false],
    [`.isBoolean('a')`, 'a', false],
    [`.isBoolean(class A {})`, class A {}, false],
    [`.isBoolean(new Error())`, new Error(), false],
    [`.isBoolean({})`, {}, false],
    [`.isBoolean({ a: 1 })`, { a: 1 }, false],

    // tslint:disable: no-construct
    [`.isBoolean(new Boolean())`, new Boolean(), false],
    [`.isBoolean(new Boolean(undefined))`, new Boolean(undefined), false],
    [`.isBoolean(new Boolean(null))`, new Boolean(null), false],
    [`.isBoolean(new Boolean(0))`, new Boolean(0), false],
    [`.isBoolean(new Boolean(''))`, new Boolean(''), false],
    [`.isBoolean(new Boolean(false))`, new Boolean(false), false],
    [`.isBoolean(new Boolean(true))`, new Boolean(true), false],
    [`.isBoolean(new Boolean('true'))`, new Boolean('true'), false],
    [`.isBoolean(new Boolean('false'))`, new Boolean('false'), false],
    [`.isBoolean(new Boolean('a'))`, new Boolean('a'), false],
    [`.isBoolean(new Boolean([]))`, new Boolean([]), false],
    [`.isBoolean(new Boolean({}))`, new Boolean({}), false],

    // tslint:enable: no-construct
    [`.isBoolean(Boolean())`, Boolean(), true],
    [`.isBoolean(Boolean(undefined))`, Boolean(undefined), true],
    [`.isBoolean(Boolean(null))`, Boolean(null), true],
    [`.isBoolean(Boolean(0))`, Boolean(0), true],
    [`.isBoolean(Boolean(''))`, Boolean(''), true],
    [`.isBoolean(Boolean(false))`, Boolean(false), true],
    [`.isBoolean(Boolean(true))`, Boolean(true), true],
    [`.isBoolean(Boolean('true'))`, Boolean('true'), true],
    [`.isBoolean(Boolean('false'))`, Boolean('false'), true],
    [`.isBoolean(Boolean('a'))`, Boolean('a'), true],
    [`.isBoolean(Boolean([]))`, Boolean([]), true],
    [`.isBoolean(Boolean({}))`, Boolean({}), true],
    [`.isBoolean(true)`, true, true],
    [`.isBoolean(false)`, false, true],
  ])('%s', (_, a, expected) => {
    const d = Boolean.isBoolean(a);

    expect(d).toStrictEqual(expected!);
  });
});
