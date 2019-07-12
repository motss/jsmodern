import { PrototypeStruct } from '..';

export function utilIsSet<T>(x: any): x is Set<T> {
  return null == x ? false : 'object' === typeof(x) && 'Set' === x.constructor.name;
}

export type IsSetFn = (x: any) => boolean;
export const isSet: PrototypeStruct = {
  isStatic: true,
  label: 'isSet',
  fn: utilIsSet,
};
