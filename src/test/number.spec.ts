import '../number.ts';

describe('number', () => {
  type TestSuccess = [string, string, boolean, boolean];
  test.each<TestSuccess>([
    ['Number.prototype.divFloor', 'divFloor', false, true],
    ['Number.prototype.divModFloor', 'divModFloor', false, true],
    ['Number.prototype.divRem', 'divRem', false, true],
    ['Number.prototype.gcd', 'gcd', false, true],
    ['Number.prototype.isBetween', 'isBetween', false, true],
    ['Number.prototype.isEven', 'isEven', false, true],
    ['Number.prototype.isMultipleOf', 'isMultipleOf', false, true],
    ['Number.prototype.isOdd', 'isOdd', false, true],
    ['Number.prototype.lcm', 'lcm', false, true],
    ['Number.prototype.modFloor', 'modFloor', false, true],

    ['Number.isNumber', 'isNumber', true, true],
    ['Number.range', 'range', true, true],
  ])('%s', (_, a, b, expected) => {
    const d = a in (b ? Number : Number.prototype);

    expect(d).toStrictEqual(expected);
  });

});
