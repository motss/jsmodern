import type { PrototypeStruct } from '../index.js';

interface IsEven {
  isEven(): boolean;
}

export const isEven: PrototypeStruct = {
  label: 'isEven',
  fn: function numberIsEven(): boolean {
    const ctx = this as unknown as number;

    // tslint:disable-next-line: no-bitwise
    return !(ctx & 1);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface Number extends IsEven {}
}
