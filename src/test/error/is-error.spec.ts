import { isError } from '../../error/is-error';
import { extend } from '../../extend';

extend({ error: [isError] });

describe('Error.isError', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isError()', undefined, false],
    ['.isError(null)', null, false],
    ['.isError(0)', 0, false],
    ['.isError(NaN)', NaN, false],
    ['.isError(Infinity)', Infinity, false],
    [`.isError(Symbol('a'))`, Symbol('a'), false],
    [`.isError([])`, [], false],
    [`.isError(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isError(() => {})`, () => void 0, false],
    [`.isError(function () {})`, function a() { return void 0; }, false],
    [`.isError(async function () {})`, async function a() { return void 0; }, false],
    [`.isError('a')`, 'a', false],
    [`.isError(class A {})`, class A {}, false],
    [`.isError({})`, {}, false],
    [`.isError({ a: 1 })`, { a: 1 }, false],

    [`.isError(new Error())`, new Error(), true],
    [`.isError(new TypeError())`, new TypeError(), true],
  ])('%s', (_, a, expected) => {
    const d = Error.isError(a);

    expect(d).toStrictEqual(expected!);
  });
});
