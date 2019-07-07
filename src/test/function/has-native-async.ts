/**
 * This is used to pass tests when native `async...await` is not supported.
 * Async function's name returns `AsyncFunction` with native support but polyfilled version
 * returns `Function` which causes tests to fail.
 */
export function hasNativeAsync() {
  try {
    // tslint:disable-next-line: no-function-constructor-with-string-args
    const a = new Function(`async () => {}`);

    a();
    return true;
  } catch (e) {
    return false;
  }
}

export function hasNativeAsyncIterator() {
  try {
    // tslint:disable-next-line: no-function-constructor-with-string-args
    const a = new Function(`async function* a() => {}`);

    a();
    return true;
  } catch (e) {
    return false;
  }
}
