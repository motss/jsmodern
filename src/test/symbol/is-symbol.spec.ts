import { isSymbol, IsSymbolFn } from '../../symbol/is-symbol';

const { label, fn } = isSymbol;

Object.defineProperty(Symbol, label, { value: fn });

describe('Symbol.isSymbol', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isSymbol()', undefined, false],
    ['.isSymbol(null)', null, false],
    ['.isSymbol(0)', 0, false],
    ['.isSymbol(NaN)', NaN, false],
    ['.isSymbol(Infinity)', Infinity, false],
    [`.isSymbol([])`, [], false],
    [`.isSymbol(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isSymbol(true)`, true, false],
    [`.isSymbol('a')`, 'a', false],
    [`.isSymbol(class A {})`, class A {}, false],
    [`.isSymbol(new Error())`, new Error(), false],
    [`.isSymbol({})`, {}, false],
    [`.isSymbol({ a: 1 })`, { a: 1 }, false],
    [`.isSymbol(() => {})`, () => void 0, false],
    [`.isSymbol(function () {})`, function a() { return void 0; }, false],
    [`.isSymbol(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isSymbol(async () => {})`, async () => void 0, false],
    [`.isSymbol(async function () {})`, async function a() { return void 0; }, false],

    [`.isSymbol(Symbol('a'))`, Symbol('a'), true],
  ])('%s', (_, a, expected) => {
    const d = Symbol.isSymbol(a);

    expect(d).toStrictEqual(expected!);
  });

});

declare global {
  interface SymbolConstructor {
    isSymbol: IsSymbolFn;
  }
}
