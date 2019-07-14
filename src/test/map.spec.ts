import '../map.js';

describe('map', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Map.prototype.entryOrDefault', 'entryOrDefault', false, true],
    ['Map.prototype.entry', 'entry', false, true],
    ['Map.prototype.getOrDefault', 'getOrDefault', false, true],
    ['Map.prototype.isEmpty', 'isEmpty', false, true],
    ['Map.prototype.iter', 'iter', false, true],
    ['Map.prototype.len', 'len', false, true],
    ['Map.prototype.removeEntry', 'removeEntry', false, true],
    ['Map.prototype.toArray', 'toArray', false, true],

    ['Map.from', 'from', true, true],
    ['Map.isMap', 'isMap', true, true],
    ['Map.of', 'of', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Map : Map.prototype);

    expect(d).toStrictEqual(expected);
  });

});
