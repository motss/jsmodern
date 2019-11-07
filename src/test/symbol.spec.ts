import '../symbol.ts';

describe('symbol', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Symbol.isSymbol', 'isSymbol', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Symbol : Symbol.prototype);

    expect(d).toStrictEqual(expected);
  });

});
