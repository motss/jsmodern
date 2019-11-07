import { PrototypeStruct } from '../index.js';

interface IsBetween {
  isBetween(min: number, max: number): boolean;
}

export const isBetween: PrototypeStruct = {
  label: 'isBetween',
  fn: function numberIsBetween(min: number, max: number): boolean {
    const ctx = this as unknown as number;

    return ctx >= Number(min) && ctx < Number(max);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends IsBetween {}
}
