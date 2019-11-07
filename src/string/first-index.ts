import { PrototypeStruct } from '../index.ts';

interface FirstIndex {
  firstIndex(): number;
}

export const firstIndex: PrototypeStruct = {
  label: 'firstIndex',
  fn: function stringFirstIndex(): number {
    return 0;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends FirstIndex {}
}
