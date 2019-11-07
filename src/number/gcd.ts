export function utilGcd(a: number, b: number): number {
  // gcd(4, 8) = 4
  // [4, 8]
  // [8, 4%8] = [8, 4]
  // [4, 8%4] = [4, 0]
  // 4 #
  let x = Math.abs(a);
  let y = Math.abs(b);

  while (y) [x, y] = [y, x % y];

  return x;
}

interface Gcd {
  gcd(divisor: number): number;
}

export const gcd: PrototypeStruct = {
  label: 'gcd',
  fn: function numberGcd(divisor: number): number {
    const ctx = this as unknown as number;

    return utilGcd(ctx, Number(divisor));
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends Gcd {}
}
