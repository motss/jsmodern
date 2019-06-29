import { contains, ContainsFn } from '../../string/contains.js';

const { label, fn } = contains;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.contains', () => {
  type TestSuccess = [string, string, string, boolean];
  test.each<TestSuccess>([
    ['empty string', '', 's', false],
    ['single character', 's', 's', true],
    ['string', 'string', 'str', true],
    ['longer substring', 'string', 'string slice', false],
  ])('%s', (_, a, b, expected) => {
    const d = a.contains(b);
    expect(d).toStrictEqual(expected);
  });

  test(`String.prototype.includes is not a function`, () => {
    const includes = String.prototype.includes;

    try {
      String.prototype.includes = null!;

      const d = ''.contains('s');

      expect(d).toStrictEqual(false);
    } catch (e) {
      expect(e).not.toBeDefined();
    } finally {
      String.prototype.includes = includes;
    }
  });
});

declare global {
  interface String {
    contains: ContainsFn;
  }
}
