import { PrototypeStruct } from '..';

export const len: PrototypeStruct = {
  label: 'len',
  function: function stringLen(): number {
    return (this as unknown as string).length;
  },
};
