import '../date.js';

describe('date', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Date.prootype.difference', 'difference', false, true],
    ['Date.prootype.isAfter', 'isAfter', false, true],
    ['Date.prootype.isBefore', 'isBefore', false, true],

    ['Date.isDate', 'isDate', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Date : Date.prototype);

    expect(d).toStrictEqual(expected);
  });

});
