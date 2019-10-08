# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Iterator](#iterator)
  - [Constructor](#constructor)
    - [isAsyncIterator(x)](#isasynciteratorx)
    - [isIterator(x)](#isiteratorx)
  - [Prototype](#prototype)

## Iterator

### Constructor

#### isAsyncIterator(x)

Returns `true` if `x` is an `Iterator`.

```ts
async function a* () { yield 1; }
function* b() { yield 2; }

isAsyncIterator(a()) === true;
isAsyncIterator(b()) === false;
```

#### isIterator(x)

Returns `true` if `x` is an `async Iterator`.

```ts
async function a* () { yield 1; }
function* b() { yield 2; }

isIterator(a()) === false;
isIterator(b()) === true;
```

### Prototype

None
