import { PrototypeStruct } from '..';

export type IsBetweenFn = (min: number, max: number) => boolean;
export const isBetween: PrototypeStruct = {
  label: 'isBetween',
  fn: function numberIsBetween(min: number, max: number): boolean {
    const ctx = this as unknown as number;

    return ctx >= Number(min) && ctx < Number(max);
  },
};

declare global {
  interface Number {
    isBetween: IsBetweenFn;
  }
}
