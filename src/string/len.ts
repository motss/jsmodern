import { PrototypeStruct } from '..';

export type LenFn = () => number;
export const len: PrototypeStruct = {
  label: 'len',
  fn: function stringLen(): number {
    return (this as unknown as string).length;
  },
};

declare global {
  interface String {
    len: LenFn;
  }
}
