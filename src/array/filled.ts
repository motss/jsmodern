interface Filled {
  filled<T>(len: number, value?: T): T[];
}

export const filled: PrototypeStruct = {
  isStatic: true,
  label: 'filled',
  fn: function arrayFilled<T = unknown>(...args: unknown[]): T[] {
    const argsLen = args.length;
    const len = args.length > 0 ? args[0] as number : -1;

    if (!argsLen || len < 1) throw new TypeError(`Unable to create list with unknown length`);

    const filledValue = (argsLen > 1 ? args[1] : 0) as T;

    return Array.from<unknown, T>(Array(len), () => filledValue);
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface ArrayConstructor extends Filled {}
}
