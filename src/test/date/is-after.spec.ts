import { isAfter } from '../../date/is-after.js';
import { extend } from '../../extend.js';

extend({ date: [isAfter] });

describe('Date.prototype.isAfter', () => {
  type TestSuccess = [string, Date, Date, boolean];
  test.each<TestSuccess>([
    // tslint:disable: max-line-length
    [`.isAfter(new Date('2020-01-01'))`, new Date('2020-02-02'), new Date('2020-02-02'), false],
    [`.isAfter(new Date(1577836800000))`, new Date('2020-02-02'), new Date(1580601600000), false],
    [`.isAfter(new Date('2020-02-02'))`, new Date('2020-02-02'), new Date('2020-03-03'), false],
    [`.isAfter(new Date(1583193600000))`, new Date('2020-02-02'), new Date(1583193600000), false],

    [`.isAfter(new Date('2020-01-01'))`, new Date('2020-02-02'), new Date('2020-01-01'), true],
    [`.isAfter(new Date(1577836800000))`, new Date('2020-02-02'), new Date(1577836800000), true],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, expected) => {
    const d = a.isAfter(b);

    expect(d).toStrictEqual(expected);
  });

});
