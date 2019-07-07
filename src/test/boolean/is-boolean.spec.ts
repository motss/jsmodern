import { isBoolean, IsBooleanFn } from '../../boolean/is-boolean';

const { label, fn } = isBoolean;

Object.defineProperty(Boolean, label, { value: fn });

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

    [`.isBoolean(new Boolean(true))`, new Boolean(true), true],
    [`.isBoolean(new Boolean('true'))`, new Boolean('true'), true],
    [`.isBoolean(new Boolean('false'))`, new Boolean('false'), true],
    [`.isBoolean(new Boolean('a'))`, new Boolean('a'), true],
    [`.isBoolean(new Boolean([]))`, new Boolean([]), true],
    [`.isBoolean(new Boolean({}))`, new Boolean({}), true],
    [`.isBoolean(true)`, true, true],
    [`.isBoolean(false)`, false, true],
    // tslint:enable: no-construct
  ])('%s', (_, a, expected) => {
    const d = Boolean.isBoolean(a);

    expect(d).toStrictEqual(expected!);
  });
});

declare global {
  interface BooleanConstructor {
    isBoolean: IsBooleanFn;
  }
}
