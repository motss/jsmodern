import '../string.js';

describe('string', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['String.prototype.capitalize', 'capitalize', false, true],
    ['String.prototype.contains', 'contains', false, true],
    ['String.prototype.firstIndex', 'firstIndex', false, true],
    ['String.prototype.firstItem', 'firstItem', false, true],
    ['String.prototype.insert', 'insert', false, true],
    ['String.prototype.isEmpty', 'isEmpty', false, true],
    ['String.prototype.lastIndex', 'lastIndex', false, true],
    ['String.prototype.lastItem', 'lastItem', false, true],
    ['String.prototype.len', 'len', false, true],
    ['String.prototype.lines', 'lines', false, true],
    ['String.prototype.retain', 'retain', false, true],
    ['String.prototype.splitWhitespace', 'splitWhitespace', false, true],
    ['String.prototype.toCamelCase', 'toCamelCase', false, true],
    ['String.prototype.toKebabCase', 'toKebabCase', false, true],
    ['String.prototype.toPascalCase', 'toPascalCase', false, true],
    ['String.prototype.toSnakeCase', 'toSnakeCase', false, true],
    ['String.prototype.toStartCase', 'toStartCase', false, true],

    ['String.isString', 'isString', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? String : String.prototype);

    expect(d).toStrictEqual(expected);
  });

});
