<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">String</h1>

  <p></p>
</div>

<hr />

[![MIT License][mit-license-badge]][mit-license-url]

> String extensions

## Table of contents <!-- omit in toc -->

- [Usage](#usage)
- [Available extensions](#available-extensions)
  - [Constructor](#constructor)
  - [Prototype](#prototype)
- [License](#license)

## Usage

```ts
import { extend } from 'jsmodern';
import {
  capitalize,
  contains,
  firstIndex,
  firstItem,
  insert,
  isEmpty,
  isString,
  lastIndex,
  lastItem,
  len,
  lines,
  retain,
  splitWhitespace,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
  toStartCase,
} from 'jsmodern/dist/string.js';

extend({
  string: [
    capitalize,
    contains,
    firstIndex,
    firstItem,
    insert,
    isEmpty,
    isString,
    lastIndex,
    lastItem,
    len,
    lines,
    retain,
    splitWhitespace,
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
    toStartCase,
  ],
});

console.log([
  String.prototype.capitalize,
  String.prototype.contains,
  String.prototype.firstIndex,
  String.prototype.firstItem,
  String.prototype.insert,
  String.prototype.isEmpty,
  String.isString,
  String.prototype.lastIndex,
  String.prototype.lastItem,
  String.prototype.len,
  String.prototype.lines,
  String.prototype.retain,
  String.prototype.splitWhitespace,
  String.prototype.toCamelCase,
  String.prototype.toKebabCase,
  String.prototype.toPascalCase,
  String.prototype.toSnakeCase,
  String.prototype.toStartCase,
].every(n => 'function' === typeof(n)));
```

## Available extensions

### Constructor

* [isString(x)]

### Prototype

* [capitalize()]
* [contains(pattern)]
* [firstIndex()]
* [firstItem()]
* [insert(index, string)]
* [isEmpty()]
* [lastIndex()]
* [lastItem()]
* [len()]
* [lines()]
* [retain(predicate)]
* [splitWhitespace()]
* [toCamelCase()]
* [toKebabCase()]
* [toPascalCase()]
* [toSnakeCase()]
* [toStartCase()]

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[isString(x)]: /src/string/API_REFERENCE.md#isstringx

[capitalize()]: /src/string/API_REFERENCE.md#capitalize
[contains(pattern)]: /src/string/API_REFERENCE.md#containspattern
[firstIndex()]: /src/string/API_REFERENCE.md#firstindex
[firstItem()]: /src/string/API_REFERENCE.md#firstitem
[insert(index, string)]: /src/string/API_REFERENCE.md#insertindex-string
[isEmpty()]: /src/string/API_REFERENCE.md#isempty
[lastIndex()]: /src/string/API_REFERENCE.md#lastindex
[lastItem()]: /src/string/API_REFERENCE.md#lastitem
[len()]: /src/string/API_REFERENCE.md#len
[lines()]: /src/string/API_REFERENCE.md#lines
[retain(predicate)]: /src/string/API_REFERENCE.md#retainpredicate
[splitWhitespace()]: /src/string/API_REFERENCE.md#splitwhitespace
[toCamelCase()]: /src/string/API_REFERENCE.md#tocamelcase
[toKebabCase()]: /src/string/API_REFERENCE.md#tokebabcase
[toPascalCase()]: /src/string/API_REFERENCE.md#topascalcase
[toSnakeCase()]: /src/string/API_REFERENCE.md#tosnakecase
[toStartCase()]: /src/string/API_REFERENCE.md#tostartcase

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
