import { PrototypeStruct } from '..';

export function isAnyString(s: any): s is string {
  return 'string' === typeof(s);
}

export type IsStringFn = (s: any) => boolean;
export const isString: PrototypeStruct = {
  isStatic: true,
  label: 'isString',
  fn: isAnyString,
};
