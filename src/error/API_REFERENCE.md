# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Error](#error)
  - [Constructor](#constructor)
    - [isError(x)](#iserrorx)
  - [Prototype](#prototype)

## Error

### Constructor

#### isError(x)

Returns `true` if the `x` is a `Error` instance.

```ts
Error.isError(new Error) === true;
Error.isError(new TypeError) === true;
```

### Prototype

None
