import '../array.ts';

describe('array', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Array.prototype.all', 'all', false, true],
    ['Array.prototype.any', 'any', false, true],
    ['Array.prototype.binarySearch', 'binarySearch', false, true],
    ['Array.prototype.chunks', 'chunks', false, true],
    ['Array.prototype.clear', 'clear', false, true],
    ['Array.prototype.contains', 'contains', false, true],
    ['Array.prototype.endsWith', 'endsWith', false, true],
    ['Array.prototype.enumerate', 'enumerate', false, true],
    ['Array.prototype.firstItem', 'firstItem', false, true],
    ['Array.prototype.fold', 'fold', false, true],
    ['Array.prototype.insert', 'insert', false, true],
    ['Array.prototype.isEmpty', 'isEmpty', false, true],
    ['Array.prototype.isSorted', 'isSorted', false, true],
    ['Array.prototype.iter', 'iter', false, true],
    ['Array.prototype.lastIndex', 'lastIndex', false, true],
    ['Array.prototype.lastItem', 'lastItem', false, true],
    ['Array.prototype.len', 'len', false, true],
    ['Array.prototype.max', 'max', false, true],
    ['Array.prototype.min', 'min', false, true],
    ['Array.prototype.partition', 'partition', false, true],
    ['Array.prototype.product', 'product', false, true],
    ['Array.prototype.reject', 'reject', false, true],
    ['Array.prototype.remove', 'remove', false, true],
    ['Array.prototype.repeat', 'repeat', false, true],
    ['Array.prototype.retain', 'retain', false, true],
    ['Array.prototype.select', 'select', false, true],
    ['Array.prototype.shuffle', 'shuffle', false, true],
    ['Array.prototype.splitAt', 'splitAt', false, true],
    ['Array.prototype.split', 'split', false, true],
    ['Array.prototype.startsWith', 'startsWith', false, true],
    ['Array.prototype.sum', 'sum', false, true],
    ['Array.prototype.truncate', 'truncate', false, true],

    ['Array.filled', 'filled', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Array : Array.prototype);

    expect(d).toStrictEqual(expected);
  });

});
