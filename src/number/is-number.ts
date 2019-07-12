import { PrototypeStruct } from '..';

export function numberIsNumber(n: any): n is number {
  return 'number' === typeof(n) && n === n;
}

export type IsNumberFn = (n: any) => boolean;
export const isNumber: PrototypeStruct = {
  isStatic: true,
  label: 'isNumber',
  fn: numberIsNumber,
};
