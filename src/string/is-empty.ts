import { PrototypeStruct } from '..';

export type IsEmptyFn = () => boolean;
export const isEmpty: PrototypeStruct = {
  label: 'isEmpty',
  fn: function stringIsEmpty(): boolean {
    return !(this as unknown as string).length;
  },
};
