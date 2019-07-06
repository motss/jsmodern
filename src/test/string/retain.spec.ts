import { retain, RetainFn } from '../../string/retain.js';

const { label, fn } = retain;

Object.defineProperty(String.prototype, label, { value: fn });

describe('String.prototype.retain', () => {
  type TestSuccess = [string, string, (character: string) => boolean, string];
  test.each<TestSuccess>([
    ['empty string', '', (s: string) => 's' === s, ''],
    ['single character', 's', (s: string) => 's' === s, 's'],
    ['string', 'string slice', (s: string) => 's' === s, 'ss'],
  ])('%s', (_, a, b, expected) => {
    const d = a.retain(b);
    expect(d).toEqual(expected);
  });
});

declare global {
  interface String {
    retain: RetainFn;
  }
}