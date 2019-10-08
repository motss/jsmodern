# API References

## Table of contents <!-- omit in toc -->

- [API References](#api-references)
  - [Array](#array)
    - [Constructor](#constructor)
      - [filled(length[, filledValue = 0])](#filledlength-filledvalue--0)
    - [Prototype](#prototype)
      - [all(predicate)](#allpredicate)
      - [any(predicate)](#anypredicate)
      - [binarySearch(x)](#binarysearchx)
      - [chunks(chunkSize)](#chunkschunksize)
      - [clear()](#clear)
      - [contains(x)](#containsx)
      - [endsWith(needle)](#endswithneedle)
      - [enumerate()](#enumerate)
      - [firstItem()](#firstitem)
      - [fold(initialValue, predicate)](#foldinitialvalue-predicate)
      - [insert(index, element)](#insertindex-element)
      - [isEmpty()](#isempty)
      - [isSorted()](#issorted)
      - [iter()](#iter)
      - [lastItem()](#lastitem)
      - [len()](#len)
      - [max()](#max)
      - [min()](#min)
      - [partition(predicate)](#partitionpredicate)
      - [product()](#product)
      - [remove([index])](#removeindex)
      - [repeat(n)](#repeatn)
      - [retain(predicate)](#retainpredicate)
      - [shuffle()](#shuffle)
      - [splitAt(at)](#splitatat)
      - [split(predicate)](#splitpredicate)
      - [startsWith(needle)](#startswithneedle)
      - [sum()](#sum)
      - [truncate(len)](#truncatelen)

## Array

### Constructor

#### filled(length[, filledValue = 0])

Creates a list of the given `length` with optional `filledValue` which defaults to `0` when it is not set at each position.

```ts
/** [0, 0, 0], a list of 3 elements with each set to `0` when `filledValue` is not set */
Array.filed(3);

/** [1, 1, 1], a list of 3 elements, each filled with the defined value `1` */
Array.filled(3, 1);

/** [[], [], []], a list of 3 elements, each filled with an empty array */
const a = Array.filled(3, []);

a[0][0] = 2;
a; /** [[2], [2], [2]], each filled value is pointing to the same array */
```

### Prototype

#### all(predicate)

Tests if every element of the list matches a `predicate`.

```ts
const a = [1, 2, 3];

a.all(x => x > 0) === true;
a.all(x => x > 5) === false;
```

#### any(predicate)

Tests if any element of the list matches a `predicate`.

```ts
const a = [1, 2, 3];

a.any(x => x > 0) === true;
a.any(x => x > 5) === false;
```

#### binarySearch(x)

Binary searches this sorted array for a given element. Returns the index of the matching element if the value is found, otherwise, `-1` indicates no match for `x`. If there are multiple matches, then any one of the matches could be returned. _Note that this function will not check if the array is always sorted. Passing an unsorted array will produce the expected result._

```ts
const s = [0, 1, 1, 1, 1, 2, 3, 5, 8, 13 , 21, 34, 55]

s.binarySearch(13) === 9;
s.binarySearch(4) === -1;
s.binarySearch(100) === -1;
s.binarySearch(1) === 2;
```

#### chunks(chunkSize)

Returns a list of `chunkSize` elements of this array.

```ts
const a = [1, 2, 3, 4, 5];

a.chunks(2); /** [[1, 2], [3, 4], [5]] */
```

#### clear()

Clears the list, removing all values.

```ts
const a = [1, 2, 3];

a.clear();
a; /** [] */
```

#### contains(x)

Returns `true` if the array contains an element with the given value.

```ts
const a = [10, 40, 30];

a.contains(30) === true;
a.contains(50) === false;
```

#### endsWith(needle)

Returns `true` if `needle` is a suffice of the array.

```ts
const v = [10, 40, 30];

v.endsWith(30) === true;
v.endsWith([40, 30]) == true;
v.endsWith([]) === true;

v.endsWith([50]) === false;
v.endsWith([50, 30]) === false;

const y = [];
y.endsWith([]) === true;
```

#### enumerate()

Iterates over the entire list which gives the current iteration count as well as the element.

```ts
const a = [1, 2, 3];

a.enumerate(); /** [[0, 1], [1, 2], [2, 3]] */

for const [idx, element] of a.enumerate() {
  console.log('idx = %d, element = %d', idx, element);
}
```

#### firstItem()

Returns the first element of the array, or `undefined` if it is empty.

```ts
const a = [10, 40, 30];

a.firstItem() === 10;

const b = [];

b.firstItem() === undefined;
```

#### fold(initialValue, predicate)

Reduces a collection to a single value by iteratively combining each element of the collection with an `initialValue`.

```ts
const a = [1, 2, 3];

a.fold(0, (acc, x) => acc + x) === 6;
```

#### insert(index, element)

Inserts an element at position `index` within the list, shifting all elements after it to the right, where `index` is between `0` and the length of the list.

```ts
const a = [1, 2, 3];

a.insert(1, 4);
a; /** [1, 4, 2, 3] */

a.insert(4, 5);
a; /** [1, 4, 2, 3, 5] */
```

#### isEmpty()

Returns `true` if the list contains no elements.

```ts
const a = [];

a.isEmpty() === true;

a.push(1);
a.isEmpty() === false;
```

#### isSorted()

Checks if the elements of the list are sorted.

```ts
[1, 2, 2, 9].isSorted() === true;
[1, 3, 2, 4].isSorted() === false;
[0].isSorted() === true;
[].isSorted() === true;
[0.0, 1.0, NaN].isSorted() === false;
```

#### iter()

Returns an iterator over the list.

```ts
const a = [1, 2, 4];
const iterator = a.iter();

iterator.next().value === 1;
iterator.next().value === 2;
iterator.next().value === 4;
iterator.next().done === true;
```

#### lastItem()

Returns the last element of the array, or `undefined` if it is empty.

```ts
const v = [10, 40, 30];

v.lastItem() === 30;

const x = [];

v.lastItem() === undefined;
```

#### len()

Returns the number of elements in the list, also referred to as its `length`.

```ts
[1, 2, 3].len() === 3;
```

#### max()

Returns the maximum element of a list.

```ts
[1, 2, 3].max() === 3;
[].max() === undefined;
```

#### min()

Returns the minimum element of a list.

```ts
[1, 2, 3].min() === 1;
[].min() === undefined;
```

#### partition(predicate)

Creates two collections from a list.

```ts
[1, 2, 3].partition(n => n % 2 === 0); /** [[2], [1, 3]] */
```

#### product()

Iterates over the entire list, multiplying all the elements.

```ts
[1, 2, 3].product() === 6;
```

#### remove([index])

Removes and returns the element at position `index` within the list, shifting all elements after it to the left, where `index` is between `0` and the length of the list and defaults to `0` if it is not set.

```ts
const a = [1, 2 ,3];

a.remove() === 1;
a.remove(1) === 1;
a; /** [2] */
```

#### repeat(n)

Creates a list by repeating a slice `n` times.

```ts
[1, 2].repeat(3); /** [1, 2, 1, 2, 1, 2] */
```

#### retain(predicate)

Retains only the elements specified by the `predicate`. In other words, remove all elements `e` such as `f(e)` returns `false`. This method operates in place and preserves the order of the retained elements.

```ts
const a = [1, 2, 3, 4];

a.retain(n => n % 2 === 0);
a; /** [2, 4] */
```

#### shuffle()

Shuffles the elements of the list randomly.

```ts
const a = [1, 2, 3, 4];

a.shuffle();
a; /** [2, 3, 1, 4] */
```

#### splitAt(at)

Splits the collection into two at the given index. Returns a newly allocated list. List contains elements `[0, at)`, and the returned list contains elements `[at, len)`.

```ts
const a = [1, 2, 3];
const b = a.splitAt(1);

a; /** [1] */
b; /** [2, 3] */
```

#### split(predicate)

Returns a list of subslices separated by elements that match `predicate`. The matched element is not contained in the subslices. If the first element is matched, an empty slice will be the first item returned. Similarly, the last item in the slice is matched, an empty slice will be the last item. If two matched elements are directly adjacent, an empty slice will be present between them.

```ts
const a = [10, 40, 33, 20];
a.split(num => num % 3 === 0); /** [[10, 40], [20]] */

const y = [10, 40, 33];
y.split(num => num % 3 === 0); /** [[10, 40], []] */

const z = [10, 6, 33, 20];
z.split(num => num % 3 === 0); /** [[10], [], 20] */
```

#### startsWith(needle)

Returns `true` if the `needle` is a prefix of the slice.

```ts
const  v = [10, 40, 30];

v.startsWith([10]) === true;
v.startsWith([10, 40]) === true;
v.startsWith([]) === true;

v.startsWith([50]) === false;
v.startsWith([10, 50]) === false;

const x = [];
x.startsWith([]) === true;
```

#### sum()

Iterates over the entire list, adding all the elements.

```ts
[1, 2, 3].sum() === 6;
```

#### truncate(len)

Shortens the list, keeping the first `len` elements and dropping the rest. If `len` is greater than the list's current length, this has no effect.

```ts
const a = [1, 2, 3, 4, 5];

a.truncate(2);
a; /** [1, 2] */
```
