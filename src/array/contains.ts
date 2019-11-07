import { PrototypeStruct } from '../index.ts';

interface Contains<T> {
  contains(valueToFind: T): boolean;
}

export const contains: PrototypeStruct = {
  label: 'contains',
  fn: function arrayContains<T>(valueToFind: T): boolean {
    const ctx = this as unknown as T[];

    return ctx.indexOf(valueToFind) >= 0;
  },
};

declare global {
  interface Array<T> extends Contains<T> {}
}
