import '../object.ts';

describe('object', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Object.isObject', 'isObject', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Object : Object.prototype);

    expect(d).toStrictEqual(expected);
  });

});
