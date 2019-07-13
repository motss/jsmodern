import { PrototypeStruct } from '..';

export type IsMultipleOfFn = (divisor: number) => boolean;
export const isMultipleOf: PrototypeStruct = {
  label: 'isMultipleOf',
  fn: function numberIsMultipleOf(divisor: number): boolean {
    const ctx = this as unknown as number;

    const x = Number(divisor);

    return !x ? false : !(ctx % x);
  },
};

declare global {
  interface Number {
    isMultipleOf: IsMultipleOfFn;
  }
}
