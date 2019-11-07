import '../set.ts';

describe('set', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Set.prototype.difference', 'difference', false, true],
    ['Set.prototype.intersection', 'intersection', false, true],
    ['Set.prototype.isDisjoint', 'isDisjoint', false, true],
    ['Set.prototype.isEmpty', 'isEmpty', false, true],
    ['Set.prototype.isSubset', 'isSubset', false, true],
    ['Set.prototype.isSuperset', 'isSuperset', false, true],
    ['Set.prototype.iter', 'iter', false, true],
    ['Set.prototype.len', 'len', false, true],
    ['Set.prototype.symmetricDifference', 'symmetricDifference', false, true],
    ['Set.prototype.toArray', 'toArray', false, true],
    ['Set.prototype.union', 'union', false, true],

    ['Set.isSet', 'isSet', true, true],
    ['Set.from', 'from', true, true],
    ['Set.of', 'of', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Set : Set.prototype);

    expect(d).toStrictEqual(expected);
  });

});
