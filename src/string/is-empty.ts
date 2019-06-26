import { PrototypeStruct } from '..';

export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  function: function stringIsEmpty(): boolean {
    return !(this as unknown as string).length;
  },
};
