import { extend } from '../src/index.js';
import {
  entry,
  entryOrDefault,
  from,
  getOrDefault,
  isEmpty,
  isMap,
  iter,
  len,
  of,
  removeEntry,
  toArray,
} from '../src/map.js';

extend({
  map: [
    entry,
    entryOrDefault,
    from,
    getOrDefault,
    isEmpty,
    isMap,
    iter,
    len,
    of,
    removeEntry,
    toArray,
  ],
});

console.log([
  Map.prototype.entry,
  Map.prototype.entryOrDefault,
  Map.from,
  Map.prototype.getOrDefault,
  Map.prototype.isEmpty,
  Map.isMap,
  Map.prototype.iter,
  Map.prototype.len,
  Map.of,
  Map.prototype.removeEntry,
  Map.prototype.toArray,
].every(n => 'function' === typeof(n)));
