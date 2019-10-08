<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">jsmodern</h1>

  <p>An extension to existing JavaScript, influenced by other great languages such as Rust, Dart, Java, Golang, etc.</p>
</div>

<hr />

<a href="https://www.buymeacoffee.com/RLmMhgXFb" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 20px !important;width: auto !important;" ></a>
[![tippin.me][tippin-me-badge]][tippin-me-url]
[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> This is, by no means, to replace JavaScript or anything like that. This is just a rather straightforward module that extends native JavaScript with useful methods that are available in some other great languages such as Rust, Dart, Java, Golang, just to name a few. This is the state what I wanted JavaScript to be in next few years. If you're with me, let's hit me up for collaboration! 💯

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
- [Available extensions](#available-extensions)
- [License](#license)

## Pre-requisites

- [Node.js][nodejs-url] >= 8.16.0
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url] so there is no need to install separately.)

## Installation

```sh
# Install via NPM
$ npm install --save jsmodern
```

## Usage

```ts
// It is recommended to only import those extensions you need instead of everything.
import { extend } from 'jsmodern';
import { sum } from 'jsmodern/dist/array/index.js';

extend({ array: [sum] });

const total = [1, 2, 3].sum();

console.log(total === 6); // true
```

## Available extensions

* [x] [Array extensions]
* [x] [Boolean extensions]
* [x] [Date extensions]
* [x] [Error extensions]
* [x] [Function extensions]
* [x] [Iterator extensions]
* [x] [Map extensions]
* [x] [Number extensions]
* [x] [Object extensions]
* [x] [Promise extensions]
* [x] [RegExp extensions]
* [x] [Set extensions]
* [x] [String extensions]
* [x] [Symbol extensions]
* [x] [WeakMap extensions]
* [x] [WeakSet extensions]

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng (motss)

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases

[Array extensions]: /src/array/README.md
[Boolean extensions]: /src/boolean/README.md
[Date extensions]: /src/date/README.md
[Error extensions]: /src/error/README.md
[Function extensions]: /src/function/README.md
[Iterator extensions]: /src/iterator/README.md
[Map extensions]: /src/map/README.md
[Number extensions]: /src/number/README.md
[Object extensions]: /src/object/README.md
[Promise extensions]: /src/promise/README.md
[RegExp extensions]: /src/regexp/README.md
[Set extensions]: /src/set/README.md
[String extensions]: /src/string/README.md
[Symbol extensions]: /src/symbol/README.md
[WeakMap extensions]: /src/weak-map/README.md
[WeakSet extensions]: /src/weak-set/README.md

<!-- Badges -->
[tippin-me-badge]: https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@igarshmyb/F0918E
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/jsmodern?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/jsmodern
[mit-license-badge]: https://flat.badgen.net/npm/license/jsmodern

[downloads-badge]: https://flat.badgen.net/npm/dm/jsmodern
[total-downloads-badge]: https://flat.badgen.net/npm/dt/jsmodern?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/jsmodern
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/jsmodern

[circleci-badge]: https://flat.badgen.net/circleci/github/motss/jsmodern?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/jsmodern
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/jsmodern?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/jsmodern?label=coveralls

[codebeat-badge]: https://codebeat.co/badges/9a16d4cb-4821-48eb-a10a-7b47960870ea
[codacy-badge]: https://api.codacy.com/project/badge/Grade/7ccfc89554e24398bc5056f66dc680a7
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[tippin-me-url]: https://tippin.me/@igarshmyb
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/app-datepicker

[version-url]: https://www.npmjs.com/package/jsmodern
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/jsmodern/blob/master/LICENSE

[downloads-url]: https://www.npmtrends.com/jsmodern
[packagephobia-url]: https://packagephobia.now.sh/result?p=jsmodern
[bundlephobia-url]: https://bundlephobia.com/result?p=jsmodern

[circleci-url]: https://circleci.com/gh/motss/jsmodern/tree/master
[daviddm-url]: https://david-dm.org/motss/jsmodern
[codecov-url]: https://codecov.io/gh/motss/jsmodern
[coveralls-url]: https://coveralls.io/github/motss/jsmodern?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-jsmodern-master
[codacy-url]: https://www.codacy.com/app/motss/jsmodern?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/jsmodern&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/jsmodern/blob/master/CODE_OF_CONDUCT.md
