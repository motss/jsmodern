export function numberIsNumber(n: any): n is number {
  return 'number' === typeof(n) && n === n;
}

interface IsNumber {
  isNumber(n: any): boolean;
}

export const isNumber: PrototypeStruct = {
  isStatic: true,
  label: 'isNumber',
  fn: numberIsNumber,
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface NumberConstructor extends IsNumber {}
}
