export function isAnyString(s: any): s is string {
  return 'string' === typeof(s);
}

interface IsString {
  isString(s: any): boolean;
}

export const isString: PrototypeStruct = {
  isStatic: true,
  label: 'isString',
  fn: isAnyString,
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface StringConstructor extends IsString {}
}
