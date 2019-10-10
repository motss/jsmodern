import { extend } from '../src/index.js';
import { isSymbol } from '../src/symbol.js';

extend({
  symbol: [isSymbol],
});

console.log([
  Symbol.isSymbol,
].every(n => 'function' === typeof(n)));
