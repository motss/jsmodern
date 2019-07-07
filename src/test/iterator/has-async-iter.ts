export function hasAsyncIter() {
  try {
    // tslint:disable-next-line: no-function-constructor-with-string-args
    const a = new Function(`async function* a() {}`);

    a();
    return true;
  } catch (e) {
    return false;
  }
}
