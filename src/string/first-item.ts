import { PrototypeStruct } from '..';

export const firstItem: PrototypeStruct = {
  label: 'firstItem',
  function: function stringFirstItem(): string {
    const ctx = (this as unknown as string);

    return ctx[0];
  },
};
