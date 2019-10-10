# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Set](#set)
  - [Constructor](#constructor)
    - [from(setEntries[, mapFn])](#fromsetentries-mapfn)
    - [isSet(x)](#issetx)
    - [of(element0[, element1[, ...[, elementN]]])](#ofelement0-element1--elementn)
  - [Prototype](#prototype)
    - [difference(other)](#differenceother)
    - [intersection(other)](#intersectionother)
    - [isDisjoint(other)](#isdisjointother)
    - [isEmpty()](#isempty)
    - [isSubset(other)](#issubsetother)
    - [isSuperset(other)](#issupersetother)
    - [iter()](#iter)
    - [len()](#len)
    - [symmetricDifference(other)](#symmetricdifferenceother)
    - [toArray()](#toarray)
    - [union(other)](#unionother)

## Set

### Constructor

#### from(setEntries[, mapFn])

Creates a `Set` object that contains all key-value pairs of `setEntries` and an optional `mapFn` to call on every element of `setEntries`.

```ts
const entries = [1, 2];
const s = Set.from(entries, n => 2 + n);

s.has(3) === true;
s.has(4) === true;
```

#### isSet(x)

Returns `true` if `x` is a `Set` object.

```ts
Set.isSet(new Set()) === true;
```

#### of(element0[, element1[, ...[, elementN]]])

Creates a new `Set` object from a variable number of arguments, regardless of the number of type of arguments.

```ts
const a = {};
const b = {};
const s = Set.of(1, 2, a, b);

s.has(1) == true;
s.has(2) === true;
s.has(a) === true;
s.has(b) === true;
```

### Prototype

#### difference(other)

Visits the values representing the difference, i.e., the values that are in this `Set` but not in `other`.

```ts
const a = new Set([1, 2, 3]);
const b = new Set([4, 2, 3, 5]);

a.difference(b); /** [1] */
b.difference(a); /** [4, 5] */
```

#### intersection(other)

Visits the values representing the intersection, i.e., the values that are both in this `Set` and `other`.

```ts
const a = new Set([1, 2, 3]);
const b = new Set([4, 2, 3, 5]);

a.intersection(b); /** [2, 3] */
```

#### isDisjoint(other)

Returns `true` if this `Set` has no elements in common with `other`. This is equivalent to checking for an empty intersection.

```ts
const a = new Set([1, 2, 3]);
const b = new Set();

a.isDisjoint(b) === true;

b.add(4);
a.isDisjoint(b) === true;

a.add(1);
a.isDisjoint(b) === false;
```

#### isEmpty()

Returns `true` if the set contains no elements.

```ts
const s = new Set();

s.isEmpty() === true;
```

#### isSubset(other)

Returns `true` if the set is a subset of another, i.e., `other` contains at least all the values in this Set.

```ts
const a = new Set([1, 2, 3]);
const b = new Set();

b.isSubset(a) === true;

b.add(2);
b.isSubset(a) === true;

b.add(4);
b.isSubset(a) === false;
```

#### isSuperset(other)

Returns `true` if the set is a superset of another, i.e., this `Set` contains at least all the values in `other`.

```ts
const a = new Set([1, 2]);
const b = new Set();

b.isSuperset(a) === false;

b.add(0);
b.add(1);
b.isSuperset(a) === false;

b.add(2);
b.isSuperset(a) === true;
```

#### iter()

Returns an iterator visiting all elements in the set.

```ts
const s = new Set([1, 2, 3]);
const iter = s.iter();

iter.next().value === 1;
iter.next().value === 2;
iter.next().value === 3;
iter.next().done === true;
```

#### len()

Returns the number of elements in the set.

```ts
const s = new Set([1, 2, 3]);

s.len() === 3;
```

#### symmetricDifference(other)

Visits the values representing the symmetric difference, i.e., the values that are in this `Set` or in `other` but not in both.

```ts
const a = new Set([1, 2, 3]);
const b = new Set([4, 2, 3, 5]);

a.symmetricDifference(b); /** [1, 4, 5] */
```

#### toArray()

Creates an array containing all the elements of this `Set`.

```ts
const s = new Set([1, 2, 3]);

s.toArray(); /** [1, 2, 3] */
```

#### union(other)

Visits the values representing the union, i.e., all the values in this `Set` or `other`, without duplicates.

```ts
const a = new Set([1, 2, 3]);
const b = new Set([4, 2, 3, 5]);

a.union(b); /** [1, 2, 3, 4, 5] */
```
