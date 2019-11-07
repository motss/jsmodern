export interface PrototypeStruct<T = (...params: any[]) => any> {
  isStatic?: boolean;
  label: string;
  fn: T;
}

import * as arrayExtend from './array.js';
import * as booleanExtend from './boolean.js';
import * as dateExtend from './date.js';
import * as errorExtend from './error.js';
import * as functionExtend from './function.js';
import * as iteratorExtend from './iterator.js';
import * as mapExtend from './map.js';
import * as numberExtend from './number.js';
import * as objectExtend from './object.js';
import * as promiseExtend from './promise.js';
import * as regExpExtend from './reg-exp.js';
import * as setExtend from './set.js';
import * as stringExtend from './string.js';
import * as symbolExtend from './symbol.js';
import * as weakMapExtend from './weak-map.js';
import * as weakSetExtend from './weak-set.js';

export * from './extend.js';

export {
  arrayExtend,
  booleanExtend,
  dateExtend,
  errorExtend,
  functionExtend,
  iteratorExtend,
  mapExtend,
  numberExtend,
  objectExtend,
  promiseExtend,
  regExpExtend,
  setExtend,
  stringExtend,
  symbolExtend,
  weakMapExtend,
  weakSetExtend,
};
