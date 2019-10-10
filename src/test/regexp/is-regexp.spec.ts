import { extend } from '../../extend.js';
import { isRegExp } from '../../regexp/is-regexp.js';

extend({ regExp: [isRegExp] });

describe('RegExp.isRegExp', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isRegExp()', undefined, false],
    ['.isRegExp(null)', null, false],
    ['.isRegExp(0)', 0, false],
    ['.isRegExp(NaN)', NaN, false],
    ['.isRegExp(Infinity)', Infinity, false],
    [`.isRegExp([])`, [], false],
    [`.isRegExp(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isRegExp(true)`, true, false],
    [`.isRegExp('a')`, 'a', false],
    [`.isRegExp(class A {})`, class A {}, false],
    [`.isRegExp(new Error())`, new Error(), false],
    [`.isRegExp({})`, {}, false],
    [`.isRegExp({ a: 1 })`, { a: 1 }, false],
    [`.isRegExp(() => {})`, () => void 0, false],
    [`.isRegExp(function () {})`, function a() { return void 0; }, false],
    [`.isRegExp(() => Promise.resolve(1))`, () => Promise.resolve(1), false],
    [`.isRegExp(async () => {})`, async () => void 0, false],
    [`.isRegExp(async function () {})`, async function a() { return void 0; }, false],
    [`.isRegExp(Symbol('a'))`, Symbol('a'), false],

    [`.isRegExp(/a/gi)`, /a/gi, true],
    [`.isRegExp(new RegExp('a', 'gi'))`, new RegExp('a', 'gi'), true],
  ])('%s', (_, a, expected) => {
    const d = RegExp.isRegExp(a);

    expect(d).toStrictEqual(expected!);
  });

});
