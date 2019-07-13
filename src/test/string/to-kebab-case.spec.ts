import { extend } from '../../extend.js';
import { toKebabCase } from '../../string/to-kebab-case.js';

extend({ string: [toKebabCase] });

describe('String.prototype.toKebabCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'string'],
    ['string and whitespaces', 'to kebab case', 'to-kebab-case'],
    ['snake_case', 'to_kebab_case', 'to-kebab-case'],
    ['kebab-case', 'to-kebab-case', 'to-kebab-case'],
    ['PascalCase', 'ToKebabCase', 'to-kebab-case'],
    ['capitalize', 'Tokebabcase', 'tokebabcase'],
    ['Start Case', 'To kebab Case', 'to-kebab-case'],
    ['camelCase', 'toKebabCase', 'to-kebab-case'],
  ])('%s', (_, a, expected) => {
    const d = a.toKebabCase();

    expect(d).toEqual(expected);
  });
});
