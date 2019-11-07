import { PrototypeStruct } from '../index.js';

type DelayedCallback<T> = (...args: any) => T;
export interface PromiseDelayed {
  delayed<T>(delay: number, callback: DelayedCallback<T>): Promise<undefined | T>;
}

export const delayed: PrototypeStruct = {
  isStatic: true,
  label: 'delayed',
  fn: function promiseDelayed<T>(
    delay: number,
    callback: DelayedCallback<T>
  ): Promise<undefined | T> {
    const delayInt = null == delay ? 0 : Number(delay);
    const fn = 'function' === typeof(callback) ? callback : () => void 0;

    if (delayInt < 1) return Promise.resolve(fn());

    return new Promise((yay, nah) => {
      setTimeout(() => {
        try {
          yay(fn());
        } catch (e) {
          nah(e);
        }
      }, delayInt);
    });
  },
};

declare global {
  // tslint:disable-next-line: no-empty-interface
  interface PromiseConstructor extends PromiseDelayed {}
}
