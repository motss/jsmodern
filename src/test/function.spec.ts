import '../function.js';

describe('function', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Function.isAsyncFunction', 'isAsyncFunction', true, true],
    ['Function.isAsyncGeneratorFunction', 'isAsyncGeneratorFunction', true, true],
    ['Function.isFunction', 'isFunction', true, true],
    ['Function.isGeneratorFunction', 'isGeneratorFunction', true, true],
    ['Function.isFunction', 'isFunction', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Function : Function.prototype);

    expect(d).toStrictEqual(expected);
  });

});
