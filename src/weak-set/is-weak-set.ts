interface IsWeakSet {
  isWeakSet(x: any): boolean;
}

export const isWeakSet: PrototypeStruct = {
  isStatic: true,
  label: 'isWeakSet',
  fn: function mapIsWeakSet(x: any): boolean {
    return null == x ? false : 'object' === typeof(x) && 'WeakSet' === x.constructor.name;
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface WeakSetConstructor extends IsWeakSet {}
}
