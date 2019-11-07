import '../iterator.ts';

describe('iterator', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['<global>.isAsyncIterator', 'isAsyncIterator', true, true],
    ['<global>.isIterator', 'isIterator', true, true],
  ])('%s', (_, a, __, expected) => {
    const d = a in global;

    expect(d).toStrictEqual(expected);
  });

});
