import { extend } from '../../extend.ts';
import { toStartCase } from '../../string/to-start-case.ts';

extend({ string: [toStartCase] });

describe('String.prototype.toStartCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 'S'],
    ['string', 'string', 'String'],
    ['string and whitespaces', 'to start case', 'To Start Case'],
    ['snake_case', 'to_start_case', 'To Start Case'],
    ['kebab-case', 'to-start-case', 'To Start Case'],
    ['PascalCase', 'ToStartCase', 'To Start Case'],
    ['capitalize', 'Tostartcase', 'Tostartcase'],
    ['Start Case', 'To Start Case', 'To Start Case'],
    ['camelCase', 'toStartCase', 'To Start Case'],
  ])('%s', (_, a, expected) => {
    const d = a.toStartCase();

    expect(d).toEqual(expected);
  });
});
