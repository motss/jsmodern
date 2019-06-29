import { PrototypeStruct } from '..';

export type FirstIndexFn = () => number;
export const firstIndex: PrototypeStruct = {
  label: 'firstIndex',
  fn: function stringFirstIndex(): number {
    return 0;
  },
};
