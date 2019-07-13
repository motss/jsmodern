import { extend } from '../../extend.js';
import { toSnakeCase } from '../../string/to-snake-case.js';

extend({ string: [toSnakeCase] });

describe('String.prototype.toSnakeCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'string'],
    ['string and whitespaces', 'to snake case', 'to_snake_case'],
    ['snake_case', 'to_snake_case', 'to_snake_case'],
    ['kebab-case', 'to-snake-case', 'to_snake_case'],
    ['PascalCase', 'ToSnakeCase', 'to_snake_case'],
    ['capitalize', 'Tosnakecase', 'tosnakecase'],
    ['Start Case', 'To Snake Case', 'to_snake_case'],
    ['camelCase', 'toSnakeCase', 'to_snake_case'],
  ])('%s', (_, a, expected) => {
    const d = a.toSnakeCase();

    expect(d).toEqual(expected);
  });
});
