<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">Array</h1>

  <p></p>
</div>

<hr />

[![MIT License][mit-license-badge]][mit-license-url]

> Array extensions

## Table of contents <!-- omit in toc -->

- [Usage](#usage)
- [Available extensions](#available-extensions)
- [License](#license)

## Usage

```ts
import {
  all,
  any,
  binarySearch,
  chunks,
  clear,
  contains,
  endsWith,
  enumerate,
  filled,
  firstItem,
  fold,
  insert,
  isEmpty,
  isSorted,
  iter,
  lastIndex,
  lastItem,
  len,
  max,
  min,
  partition,
  product,
  remove,
  repeat,
  retain,
  shuffle,
  split,
  splitAt,
  startsWith,
  sum,
  truncate,
} from 'jsmodern/dist/array.js';
import { extend } from 'jsmodern';

extend({
  array: [
    all,
    any,
    binarySearch,
    chunks,
    clear,
    contains,
    endsWith,
    enumerate,
    filled,
    firstItem,
    fold,
    insert,
    isEmpty,
    isSorted,
    iter,
    lastIndex,
    lastItem,
    len,
    max,
    min,
    partition,
    product,
    remove,
    repeat,
    retain,
    shuffle,
    split,
    splitAt,
    startsWith,
    sum,
    truncate,
  ],
});

console.log([
  Array.prototype.all,
  Array.prototype.any,
  Array.prototype.binarySearch,
  Array.prototype.chunks,
  Array.prototype.clear,
  Array.prototype.contains,
  Array.prototype.endsWith,
  Array.prototype.enumerate,
  Array.filled,
  Array.prototype.firstItem,
  Array.prototype.fold,
  Array.prototype.insert,
  Array.prototype.isEmpty,
  Array.prototype.isSorted,
  Array.prototype.iter,
  Array.prototype.lastIndex,
  Array.prototype.lastItem,
  Array.prototype.len,
  Array.prototype.max,
  Array.prototype.min,
  Array.prototype.partition,
  Array.prototype.product,
  Array.prototype.remove,
  Array.prototype.repeat,
  Array.prototype.retain,
  Array.prototype.shuffle,
  Array.prototype.split,
  Array.prototype.splitAt,
  Array.prototype.startsWith,
  Array.prototype.sum,
  Array.prototype.truncate,
].every(n => 'function' === typeof(n)));
```

## Available extensions

Check out [API_REFERENCES].

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[API_REFERENCES]: /src/array/API_REFERENCE.md

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[void-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
[error-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

<!-- Badges -->
[mit-license-badge]: https://flat.badgen.net/badge/license/MIT/blue

<!-- Links -->
[mit-license-url]: https://github.com/motss/deno_mod/blob/master/LICENSE
