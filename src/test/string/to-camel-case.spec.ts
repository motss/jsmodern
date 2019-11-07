import { extend } from '../../extend.ts';
import { toCamelCase } from '../../string/to-camel-case.ts';

extend({ string: [toCamelCase] });

describe('String.prototype.toCamelCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'string'],
    ['string and whitespaces', 'to camel case', 'toCamelCase'],
    ['snake_case', 'to_camel_case', 'toCamelCase'],
    ['kebab-case', 'to-camel-case', 'toCamelCase'],
    ['PascalCase', 'ToCamelCase', 'toCamelCase'],
    ['capitalize', 'Tocamelcase', 'tocamelcase'],
    ['Start Case', 'To Camel Case', 'toCamelCase'],
    ['camelCase', 'toCamelCase', 'toCamelCase'],
  ])('%s', (_, a, expected) => {
    const d = a.toCamelCase();

    expect(d).toEqual(expected);
  });
});
