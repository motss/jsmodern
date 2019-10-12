import '../weak-map.js';

describe('weakMap', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['WeakMap.from', 'from', true, true],
    ['WeakMap.isWeakMap', 'isWeakMap', true, true],
    ['WeakMap.of', 'of', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? WeakMap : WeakMap.prototype);

    expect(d).toStrictEqual(expected);
  });

});
