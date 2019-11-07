import '../weak-set.ts';

describe('weakSet', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['WeakSet.from', 'from', true, true],
    ['WeakSet.isWeakSet', 'isWeakSet', true, true],
    ['WeakSet.of', 'of', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? WeakSet : WeakSet.prototype);

    expect(d).toStrictEqual(expected);
  });

});
