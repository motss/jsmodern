import '../error.ts';

describe('error', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Error.isError', 'isError', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Error : Error.prototype);

    expect(d).toStrictEqual(expected);
  });

});
