/**
 * This is used to pass tests when native `async...await` is not supported.
 * Async function's name returns `AsyncFunction` with native support but polyfilled version
 * returns `Function` which causes tests to fail.
 */
export function hasAsync() {
  try {
    // tslint:disable-next-line: no-function-constructor-with-string-args
    const a = new Function(`async () => {}`);

    a();
    return true;
  } catch (e) {
    return false;
  }
}

export function hasAsyncIter() {
  try {
    // tslint:disable-next-line: no-function-constructor-with-string-args
    const a = new Function(`async function* a() {}`);

    a();
    return true;
  } catch (e) {
    /**
     * Simple polyfill for `Symbol.asyncIterator` as stated in
     * {@link https://bit.ly/2JxzBWX|TypeScript 2.3#Caveats}
     */
    (Symbol as any).asyncIterator = Symbol.asyncIterator || Symbol.for('Symbol.asyncIterator');
    return false;
  }
}
