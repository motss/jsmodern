<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">Date</h1>

  <p></p>
</div>

<hr />

[![MIT License][mit-license-badge]][mit-license-url]

> Date extensions

## Table of contents <!-- omit in toc -->

- [Usage](#usage)
- [Available extensions](#available-extensions)
- [License](#license)

## Usage

```ts
import {
  difference,
  isAfter,
  isBefore,
  isDate,
  isInvalidDate,
} from 'jsmodern/dist/date.js';
import { extend } from 'jsmodern';

extend({
  date: [
    difference,
    isAfter,
    isBefore,
    isDate,
    isInvalidDate,
  ],
});

console.log([
  Date.prototype.difference,
  Date.prototype.isAfter,
  Date.prototype.isBefore,
  Date.isDate,
  Date.isInvalidDate,
].every(n => 'function' === typeof(n)));
```

## Available extensions

Check out [API Reference].

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[API Reference]: /src/date/API_REFERENCE.md

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[reg-exp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[void-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
[error-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

<!-- Badges -->
[mit-license-badge]: https://flat.badgen.net/badge/license/MIT/blue

<!-- Links -->
[mit-license-url]: https://github.com/motss/deno_mod/blob/master/LICENSE
