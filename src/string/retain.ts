import { PrototypeStruct } from '..';

export const retain: PrototypeStruct = {
  label: 'retain',
  function: function stringRetain(callback: (character: string) => boolean): string {
    const ctx = this as unknown as string;

    if (!ctx.length) return '';

    return ctx.split('').filter(callback).join('');
  },
};
