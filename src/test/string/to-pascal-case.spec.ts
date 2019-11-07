import { extend } from '../../extend.ts';
import { toPascalCase } from '../../string/to-pascal-case.ts';

extend({ string: [toPascalCase] });

describe('String.prototype.toPascalCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 'S'],
    ['string', 'string', 'String'],
    ['string and whitespaces', 'to pascal case', 'ToPascalCase'],
    ['snake_case', 'to_pascal_case', 'ToPascalCase'],
    ['kebab-case', 'to-pascal-case', 'ToPascalCase'],
    ['PascalCase', 'ToPascalCase', 'ToPascalCase'],
    ['capitalize', 'Topascalcase', 'Topascalcase'],
    ['Start Case', 'To Pascal Case', 'ToPascalCase'],
    ['camelCase', 'toPascalCase', 'ToPascalCase'],
  ])('%s', (_, a, expected) => {
    const d = a.toPascalCase();

    expect(d).toEqual(expected);
  });
});
