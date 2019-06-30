import { PrototypeStruct } from '..';

export function numberIsNumber(n: any): n is number {
  return 'number' === typeof(n);
}

export type IsNumberFn = (n: any) => boolean;
export const isNumber: PrototypeStruct = {
  label: 'isNumber',
  fn: numberIsNumber,
};
