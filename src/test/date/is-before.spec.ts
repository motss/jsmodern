import { isBefore } from '../../date/is-before';
import { extend } from '../../extend';

extend({ date: [isBefore] });

describe('Date.prototype.isBefore', () => {
  type TestSuccess = [string, Date, Date, boolean];
  test.each<TestSuccess>([
    // tslint:disable: max-line-length
    [`.isBefore(new Date('2020-01-01'))`, new Date('2020-02-02'), new Date('2020-01-01'), false],
    [`.isBefore(new Date(1577836800000))`, new Date('2020-02-02'), new Date(1577836800000), false],
    [`.isBefore(new Date('2020-01-01'))`, new Date('2020-02-02'), new Date('2020-02-02'), false],
    [`.isBefore(new Date(1577836800000))`, new Date('2020-02-02'), new Date(1580601600000), false],

    [`.isBefore(new Date('2020-02-02'))`, new Date('2020-02-02'), new Date('2020-03-03'), true],
    [`.isBefore(new Date(1583193600000))`, new Date('2020-02-02'), new Date(1583193600000), true],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, expected) => {
    const d = a.isBefore(b);

    expect(d).toStrictEqual(expected);
  });

});
