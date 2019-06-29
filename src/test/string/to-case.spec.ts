import { postCase, preCase } from '../../string/to-case';

describe('preCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'string'],
    ['string and whitespaces', 'any pre case', 'any-pre-case'],
    ['snake_case', 'any_pre_case', 'any-pre-case'],
    ['kebab-case', 'any-pre-case', 'any-pre-case'],
    ['PascalCase', 'AnyPreCase', 'any-pre-case'],
    ['capitalize', 'Anyprecase', 'anyprecase'],
    ['Start Case', 'Any Pre Case', 'any-pre-case'],
    ['camelCase', 'anyPreCase', 'any-pre-case'],
  ])('%s', (_, a, expected) => {
    const d = preCase(a);

    expect(d).toEqual(expected);
  });
});

describe('postCase', () => {
  type TestSuccess = [string, string, string];
  test.each<TestSuccess>([
    ['empty string', '', ''],
    ['single character', 's', 's'],
    ['string', 'string', 'string'],
    ['string and whitespaces', 'any post case', 'anypostcase'],
    ['snake_case', 'any_post_case', 'anypostcase'],
    ['kebab-case', 'any-post-case', 'anypostcase'],
    ['PascalCase', 'AnyPostCase', 'AnyPostCase'],
    ['capitalize', 'Anypostcase', 'Anypostcase'],
    ['Start Case', 'Any Post Case', 'AnyPostCase'],
    ['camelCase', 'anyPostCase', 'anyPostCase'],
  ])('%s', (_, a, expected) => {
    const d = postCase(a);

    expect(d).toEqual(expected);
  });
});
