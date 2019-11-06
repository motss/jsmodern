# API Reference <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

- [Date](#date)
  - [Constructor](#constructor)
    - [isDate(x)](#isdatex)
    - [isInvalidDate(x)](#isinvaliddatex)
  - [Prototype](#prototype)
    - [difference(other)](#differenceother)
    - [isAfter(other)](#isafterother)
    - [isBefore(other)](#isbeforeother)

## Date

### Constructor

#### isDate(x)

Returns `true` if the `x` is a `Date` instance.

```ts
Date.isDate(new Date()) === true;
Date.isDate(new Date('2020-02-02')) === true;
```

#### isInvalidDate(x)

Returns `true` if the `x` is a `Date` instance but an `Invalid Date`.

```ts
Date.isInvalidDate('Invalid Date') === false;
Date.isInvalidDate(new Date('2020-02-02')) === false;
Date.isInvalidDate(new Date()) === false;
Date.isInvalidDate(null) === false;
Date.isInvalidDate(undefined) === false;

Date.isInvalidDate(new Date('haha')) === true;
Date.isInvalidDate(new Date(undefined)) === true;
```

### Prototype

#### difference(other)

Returns time difference between this date and `other`, in milliseconds.

```ts
const a = new Date('2020-02-02');

a.difference(new Date('2020-01-01')) === 27648e5;
```

#### isAfter(other)

Returns `true` if this date occurs after `other`.

```ts
const a = new Date('2020-02-02');

a.isAfter(new Date('2020-01-01')) === true;
```

#### isBefore(other)

Returns `true` if this date occurs before `other`.

```ts
const a = new Date('2020-02-02');

a.isBefore(new Date('2020-01-01')) === false;
```
