// @ts-ignore
import { PrototypeStruct } from '../index.d.ts';

interface Len {
  len(): number;
}

export const len: PrototypeStruct = {
  label: 'len',
  fn: function stringLen(): number {
    return (this as unknown as string).length;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends Len {}
}
