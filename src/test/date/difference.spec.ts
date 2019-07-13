import { difference } from '../../date/difference';
import { extend } from '../../extend';

extend({ date: [difference] });

describe('Date.prototype.difference', () => {
  const errorMessage = new TypeError(`Cannot compare dates with non-date argument`);

  type TestError = [string, Date, any, TypeError];
  test.each<TestError>([
    // tslint:disable: max-line-length
    [`.difference()`, new Date('2020-02-02'), undefined, errorMessage],
    [`.difference(null)`, new Date('2020-02-02'), null, errorMessage],
    [`.difference(0)`, new Date('2020-02-02'), 0, errorMessage],
    [`.difference('')`, new Date('2020-02-02'), '', errorMessage],
    [`.difference('2020-01-01')`, new Date('2020-02-02'), '2020-01-01', errorMessage],
    [`.difference('1577836800000')`, new Date('2020-02-02'), '1577836800000', errorMessage],
    [`.difference(1577836800000)`, new Date('2020-02-02'), 1577836800000, errorMessage],
    [`.difference(Date)`, new Date('2020-02-02'), Date, errorMessage],
    [`.difference(() => <date>)`, new Date('2020-02-02'), () => new Date(1577836800000), errorMessage],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, expected) => {
    try {
      a.difference(b);
    } catch (e) {
      expect(e).toStrictEqual(expected);
    }
  });

  type TestSuccess = [string, Date, any, number];
  test.each<TestSuccess>([
    // tslint:disable: max-line-length
    [`.difference(new Date('2020-01-01'))`, new Date('2020-02-02'), new Date('2020-01-01'), 2764800000],
    [`.difference(new Date(1577836800000))`, new Date('2020-02-02'), new Date(1577836800000), 2764800000],
    // tslint:enable: max-line-length
  ])('%s', (_, a, b, expected) => {
    const d = a.difference(b);

    expect(d).toStrictEqual(expected);
  });

});
