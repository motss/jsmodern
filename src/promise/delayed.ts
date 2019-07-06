import { PrototypeStruct } from '..';

type DelayedCallback<T> = (...args: any) => T;
export type DelayedFn<T> = (delay: number, callback: DelayedCallback<T>) => Promise<undefined | T>;
export interface PromiseDelayed {
  delayed<T>(delay: number, callback: DelayedCallback<T>): Promise<undefined | T>;
}
export const delayed: PrototypeStruct = {
  label: 'delayed',
  fn: function arrayDelayed<T>(
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
