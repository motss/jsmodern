import { PrototypeStruct } from '..';

export type ContainsFn<T> = (valueToFind: T) => boolean;
export const contains: PrototypeStruct = {
  label: 'contains',
  fn: function arrayContains<T>(valueToFind: T): boolean {
    const ctx = this as unknown as T[];

    return ctx.indexOf(valueToFind) >= 0;
  },
};
