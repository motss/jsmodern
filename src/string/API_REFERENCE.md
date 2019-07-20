# API Reference

## String

### Constructor

#### isString(x)

Returns `true` if `x` is a string.

```ts
String.isString('123') === true;
String.isString(123) === false;
```

### Prototype

#### capitalize()

Capitalizes this string.

```ts
const s = 'foo bar';

s.capitalize() === 'Foo bar';
```

#### contains(pattern)

Returns `true` if the given `pattern` matches a slice of a string. Returns `false` if it does not.

```ts
const s = 'bananas';

s.contains('nana') === true;
s.contains('apples') === false;
```

#### firstIndex()

Returns the first index in this string.

```ts
const s = 'foobar';

s.firstIndex() === 0;
```

#### firstItem()

Returns the first characer in this string.

```ts
'foobar'.firstItem() === 'f';
''.firstItem() === '';
```

#### insert(index, string)

Inserts a string into this string at specified `index`.

```ts
const s = '';

s.insert(0, 'f') === 'f';
s === '';
```

#### isEmpty()

Returns `true` if this string has a length of zero, and false otherwise.

```ts
''.isEmpty() === true;
's'.isEmpty() === false;
```

#### lastIndex()

Returns the last index in this string.

```ts
'foobar'.lastIndex() === 5;
''.lastIndex() === -1;
```

#### lastItem()

Returns the last character in this string.

```ts
'foobar'.lastItem() === 'r';
''.lastItem() === '';
```

#### len()

Returns the length of this string.

```ts
'foo'.len() === 3;
```

#### lines()

Returns an array containing lines of a string. Lines are ended with either a newline (`\n`) or a carrige return with a line feed (`\r\n`). The final line ending is optional.

```ts
const a = 'foo\r\nbar\n\nbaz\n';
const al = a.lines();

al[0] === 'foo';
al[1] === 'bar';
al[2] === '';
al[3] === 'baz';

const b = 'foo\nbar\n\r\nbaz';
const bl = b.lines();

bl[0] === 'foo';
bl[1] === 'bar';
bl[2] === '';
bl[3] === 'baz';
```

#### retain(predicate)

Retains only the characters specified by the `predicate`.

```ts
const s = 'f_o_ob_ar';

s.retain(c => c !== '_') === 'foobar';
s === 'f_o_ob_ar';
```

#### splitWhitespace()

Splits a string by whitespace.

```ts
'A few words'.splitWhitespace(); /** ['A', 'few', 'words'] */
' Mary   had\ta\u{2009}little  \n\t lamb'.splitWhitespace(); /** ['Mary', 'had', 'a', 'little', 'lamb'] */
```

#### toCamelCase()

Converts this string to `camelCase`.

```ts
'foo-bar'.toCamelCase() === 'fooBar';
```

#### toKebabCase()

Converts this string to `kebab-case`.

```ts
'foo_bar'.toKebabCase() === 'foo-bar';
```

#### toPascalCase()

Converts this string to `PascalCase`.

```ts
'foo-bar'.toPascalCase() === 'FooBar';
```

#### toSnakeCase()

Converts this string to `snake_case`.

```ts
'foo-bar'.toSnakeCase() === 'foo_bar';
```

#### toStartCase()

Converts this string to `Start Case`.

```ts
'foo_bar'.toStartCase() === 'Foo Bar';
```
