# API Reference

## Date

### Constructor

#### isDate()

Returns `true` if the value is a `Date` instance.

```ts
Date.isDate(new Date()) === true;
Date.isDate(new Date('2020-02-02')) === true;
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

None
