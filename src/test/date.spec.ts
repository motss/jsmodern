import '../date.ts';

describe('date', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Date.prototype.difference', 'difference', false, true],
    ['Date.prototype.isAfter', 'isAfter', false, true],
    ['Date.prototype.isBefore', 'isBefore', false, true],

    ['Date.isDate', 'isDate', true, true],
    ['Date.isInvalidDate', 'isInvalidDate', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Date : Date.prototype);

    expect(d).toStrictEqual(expected);
  });

});
