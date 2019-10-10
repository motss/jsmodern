import { extend } from '../src/index.js';
import {
  difference,
  from,
  intersection,
  isDisjoint,
  isEmpty,
  isSet,
  isSubset,
  isSuperset,
  iter,
  len,
  of,
  symmetricDifference,
  toArray,
  union,
} from '../src/set.js';

extend({
  set: [
    difference,
    from,
    intersection,
    isDisjoint,
    isEmpty,
    isSet,
    isSubset,
    isSuperset,
    iter,
    len,
    of,
    symmetricDifference,
    toArray,
    union,
  ],
});

console.log([
  Set.prototype.difference,
  Set.from,
  Set.prototype.intersection,
  Set.prototype.isDisjoint,
  Set.prototype.isEmpty,
  Set.isSet,
  Set.prototype.isSubset,
  Set.prototype.isSuperset,
  Set.prototype.iter,
  Set.prototype.len,
  Set.of,
  Set.prototype.symmetricDifference,
  Set.prototype.toArray,
  Set.prototype.union,
].every(n => 'function' === typeof(n)));
