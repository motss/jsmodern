interface Insert {
  insert(index: number, s: string): string;
}

export const insert: PrototypeStruct = {
  label: 'insert',
  fn: function stringInsert(index: number, s: string): string {
    const ctx = this as unknown as string;
    const len = ctx.length;

    if (index < 0 || index > len) throw new TypeError('String index out of bound');

    if (!len) return s;
    if (index === len) return `${ctx}${s}`;
    if (!index) return `${s}${ctx}`;

    const slice0 = ctx.slice(0, index);
    const sliceRest = ctx.slice(index);

    return `${slice0}${s}${sliceRest}`;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface String extends Insert {}
}
