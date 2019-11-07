interface Insert<T> {
  insert(index: number, element: T): void;
}

export const insert: PrototypeStruct = {
  label: 'insert',
  fn: function arrayInsert<T = unknown>(index: number, element: T): void {
    const ctx = this as unknown as T[];
    const len = ctx.length;

    if (null == index || 'number' !== typeof(index) || index < 0 || index > len) {
      throw new TypeError(`Array index out of bound`);
    }

    if (!index) {
      ctx.unshift(element);
    } else if (index === len) {
      ctx.push(element);
    } else {
      const startSlice = ctx.slice(0, index);
      const endSlice = ctx.slice(index);

      ctx.length = 0;

      for (const n of startSlice.concat(element, endSlice)) ctx.push(n);
    }
  },
};

declare global {
  interface Array<T> extends Insert<T> {}
}
