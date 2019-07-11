import { PrototypeStruct } from '..';

export interface SetOf {
  of<T>(...elemnts: T[]): Set<T>;
}
export type OfFn<T> = (...elements: T[]) => Set<T>;
export const of: PrototypeStruct = {
  label: 'of',
  fn: function setOf<T>(...elements: T[]): Set<T> {
    return new Set(elements);
  },
};
