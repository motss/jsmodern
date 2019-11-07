import '../promise.ts';

describe('promise', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Promise.delayed', 'delayed', true, true],
    ['Promise.isPromise', 'isPromise', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Promise : Promise.prototype);

    expect(d).toStrictEqual(expected);
  });

});
