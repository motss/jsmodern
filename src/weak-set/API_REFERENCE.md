# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [WeakSet](#weakset)
  - [Constructor](#constructor)
    - [from(mapEntries)](#frommapentries)
    - [isWeakSet(x)](#isweaksetx)
    - [of(element0[, element1[, ...[, elementN]]])](#ofelement0-element1--elementn)
  - [Prototype](#prototype)

## WeakSet

### Constructor

#### from(mapEntries)

Creates a `WeakSet` object that contains all keys `mapEntries` and each key must be an object.

```ts
const key1 = {};
const key2 = {};
const entries = [key1, key2];
const m = WeakSet.from(entries);

m.has(key1); // true
m.has(key2); // true
```

#### isWeakSet(x)

Returns `true` if `x` is a `WeakSet` object.

```ts
WeakSet.isWeakSet(new WeakSet()) === true;
```

#### of(element0[, element1[, ...[, elementN]]])

Creates a new `WeakSet` object from a variable number of arguments, regardless of the number of type of the arguments.

```ts
const key1 = {};
const key2 = {};
const m = WeakSet.of(key1, key2);

m.has(key1); // true;
m.has(key2); // true;
```

### Prototype

None
