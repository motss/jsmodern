import { PrototypeStruct } from '..';

interface FirstItem {
  firstItem(): string;
}

export const firstItem: PrototypeStruct = {
  label: 'firstItem',
  fn: function stringFirstItem(): string {
    const ctx = (this as unknown as string);

    return !ctx.length ? '' : ctx[0];
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends FirstItem {}
}
