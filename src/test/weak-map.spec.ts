import '../weak-map.js';

describe('weakMap', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['WeakMap.isWeakMap', 'isWeakMap', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? WeakMap : WeakMap.prototype);

    expect(d).toStrictEqual(expected);
  });

});
