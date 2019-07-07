import { isGeneratorFunction, IsGeneratorFunctionFn } from '../../function/is-generator-function';

const { label, fn } = isGeneratorFunction;

Object.defineProperty(Function, label, { value: fn });

describe('Function.isGeneratorFunction', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isGeneratorFunction()', undefined, false],
    ['.isGeneratorFunction(null)', null, false],
    ['.isGeneratorFunction(0)', 0, false],
    ['.isGeneratorFunction(NaN)', NaN, false],
    ['.isGeneratorFunction(Infinity)', Infinity, false],
    [`.isGeneratorFunction(Symbol('a'))`, Symbol('a'), false],
    [`.isGeneratorFunction([])`, [], false],
    [`.isGeneratorFunction(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isGeneratorFunction(true)`, true, false],
    [`.isGeneratorFunction('a')`, 'a', false],
    [`.isGeneratorFunction(class A {})`, class A {}, false],
    [`.isGeneratorFunction(new Error())`, new Error(), false],
    [`.isGeneratorFunction({})`, {}, false],
    [`.isGeneratorFunction({ a: 1 })`, { a: 1 }, false],
    [`.isGeneratorFunction(() => {})`, () => void 0, false],
    [`.isGeneratorFunction(function () {})`, function a() { return void 0; }, false],
    [`.isGeneratorFunction(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isGeneratorFunction(async () => {})`, async () => void 0, false],
    [`.isGeneratorFunction(async function () {})`, async function a() { return void 0; }, false],

    [`.isGeneratorFunction(function* () {})`, function* a() { return void 0; }, true],
  ])('%s', (_, a, expected) => {
    const d = Function.isGeneratorFunction(a);

    expect(d).toStrictEqual(expected!);
  });
});

declare global {
  interface Function {
    isGeneratorFunction: IsGeneratorFunctionFn;
  }
}
