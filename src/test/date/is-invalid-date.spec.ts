import { isInvalidDate } from '../../date/is-invalid-date.js';
import { extend } from '../../extend.js';

extend({ date: [isInvalidDate] });

describe('Date.isInvalidDate', () => {
  type TestSuccess = [string, any, boolean];
  test.each<TestSuccess>([
    ['.isInvalidDate()', undefined, false],
    ['.isInvalidDate(null)', null, false],
    ['.isInvalidDate(0)', 0, false],
    ['.isInvalidDate(NaN)', NaN, false],
    ['.isInvalidDate(Infinity)', Infinity, false],
    [`.isInvalidDate(Symbol('a'))`, Symbol('a'), false],
    [`.isInvalidDate([])`, [], false],
    [`.isInvalidDate(Promise.resolve(1))`, Promise.resolve(1), false],
    [`.isInvalidDate(() => {})`, () => void 0, false],
    [`.isInvalidDate(function () {})`, function a() { return void 0; }, false],
    [`.isInvalidDate(async function () {})`, async function a() { return void 0; }, false],
    [`.isInvalidDate('a')`, 'a', false],
    [`.isInvalidDate(class A {})`, class A {}, false],
    [`.isInvalidDate({})`, {}, false],
    [`.isInvalidDate({ a: 1 })`, { a: 1 }, false],
    [`.isInvalidDate(Date)`, Date, false],
    [`.isInvalidDate(new Date())`, new Date(), false],
    [`.isInvalidDate(new Date(null))`, new Date(null!), false],
    [`.isInvalidDate(new Date(2020-02-02))`, new Date('2020-02-02'), false],

    [`.isInvalidDate(new Date(void 0))`, new Date(undefined!), true],
    [`.isInvalidDate(new Date('haha'))`, new Date('haha'), true],
  ])('%s', (_, a, expected) => {
    const d = Date.isInvalidDate(a);

    expect(d).toStrictEqual(expected!);
  });
});
