import { extend } from '../src/index.js';
import { isRegExp } from '../src/regexp.js';

extend({
  regExp: [isRegExp],
});

console.log([
  RegExp.isRegExp,
].every(n => 'function' === typeof(n)));
