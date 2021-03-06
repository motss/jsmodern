import type { PrototypeStruct } from '../index.js';

interface IsEmpty {
  isEmpty(): boolean;
}

export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function stringIsEmpty(): boolean {
    return !(this as unknown as string).length;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends IsEmpty {}
}
