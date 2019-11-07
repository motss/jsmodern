import '../boolean.ts';

describe('boolean', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Boolean.isBoolean', 'isBoolean', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Boolean : Boolean.prototype);

    expect(d).toStrictEqual(expected);
  });

});
