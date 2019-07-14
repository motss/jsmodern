import '../weak-set.js';

describe('weakSet', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['WeakSet.isWeakSet', 'isWeakSet', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? WeakSet : WeakSet.prototype);

    expect(d).toStrictEqual(expected);
  });

});
