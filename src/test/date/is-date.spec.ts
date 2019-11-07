import { isDate } from '../../date/is-date.ts';
import { extend } from '../../extend.ts';

extend({ date: [isDate] });

describe('Date.isDate', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isDate()', undefined, false],
    ['.isDate(null)', null, false],
    ['.isDate(0)', 0, false],
    ['.isDate(NaN)', NaN, false],
    ['.isDate(Infinity)', Infinity, false],
    [`.isDate(Symbol('a'))`, Symbol('a'), false],
    [`.isDate([])`, [], false],
    [`.isDate(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isDate(() => {})`, () => void 0, false],
    [`.isDate(function () {})`, function a() { return void 0; }, false],
    [`.isDate(async function () {})`, async function a() { return void 0; }, false],
    [`.isDate('a')`, 'a', false],
    [`.isDate(class A {})`, class A {}, false],
    [`.isDate({})`, {}, false],
    [`.isDate({ a: 1 })`, { a: 1 }, false],
    [`.isDate(Date)`, Date, false],

    [`.isDate(new Date())`, new Date(), true],
    [`.isDate(new Date(2020-02-02))`, new Date('2020-02-02'), true],
  ])('%s', (_, a, expected) => {
    const d = Date.isDate(a);

    expect(d).toStrictEqual(expected!);
  });
});
