import '../reg-exp.ts';

describe('reg-exp', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['RegExp.isRegExp', 'isRegExp', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? RegExp : RegExp.prototype);

    expect(d).toStrictEqual(expected);
  });

});
