# Binary Tree <!-- omit in toc -->

## Table of contents <!-- omit in toc -->

## API Reference

### Node

```ts
function node(value) {
  return { value, left: null, right: null };
}
```

### Tree traversal

#### BFS

Uses queue.

```ts
// Time complexity: O(n) as every node is visited exactly once
// Space complexity: O(w) where `w` is the maximum width of BT or O(n) for worst case

function bfs(tree, cb) {
  const q = [tree];

  while (q.length) {
    const c = q.shift();

    if (c.left) q.push(c.left);
    if (c.right) q.push(c.right);

    cb(c);
  }
}
```

#### DFS

Uses stack.

```ts
// Time complexity: O(n) as every node is visited exactly once
// Space complexity: O(h) where `h` is the maximum height of BT or O(n) for worst case

function dfs(tree, order = 0, arr) {
  // pre-order
  if (0 === order) arr.push(tree.value);

  if (tree.left) dfs(tree.left, order, arr);

  // in-order
  if (1 === order) arr.push(tree.value);

  if (tree.right) dfs(tree.right, order, arr);

  // post-order
  if (2 === order) arr.push(tree.value);

  return arr;
}
```

### Insertion in level order (BFS)

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function insertionInLevelOrder(tree, n) {
  const q = [tree];

  while (q.length) {
    const c = q.shift();

    if (null == c.left) {
      c.left = n;
      break;
    } else {
      q.push(c.left);
    }

    if (null == c.right) {
      c.right = n;
      break;
    } else {
      q.push(c.right);
    }
  }

  return tree;
}
```

### Deletion

Algorithm:

1. Starting at root, find deepest and rightmost node & node to be deleted
2. Replace node to be deleted with the deepest rightmost node's value
3. Then delete deepest rightmost node

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function deletion(tree, value) {
  if (null == tree) return null;
  if (null == tree.left && null == tree.right && value === tree.value) return null;

  const deleteDeepest = (t, v) => {
    const q = [t];
    while (q.length) {
      const c = q.shift();

      if (c.left === v) { c.left = null; break; }
      if (c.right === v) { c.right = null; break; }

      if (c.left) q.push(c.left);
      if (c.right) q.push(c.right);
    }
  };

  let d = null; // node to be deleted
  let c = null; // deepest rightmost node
  const q = [tree];
  while (q.length) {
    c = q.shift();

    if (value === c.value) d = c;
    if (c.left) q.push(c.left);
    if (c.right) q.push(c.right);
  }

  if (d) {
    // Save deepest rightmost node's value
    const val = c.value;
    // Delete deepest rightmost node
    deleteDeepest(tree, c);
    // Replace node to be deleted's value with `t`
    d.value = val;
  }

  return tree;
}
```

### Create Binary Tree from a given parent array

```ts
// Time complexity: O(n)
// Space complexity: O(n)

// createNode(p, c, i):
//   return if c[i] is not null
//
//   n = node(i);
//   c[i] = n;
//
//   return (tree = c[i]) if p[i] == -1;
//
//   createNode(x, y, i) if c[p[i]] is null;
//
//   pn = c[p[i]];
//   pn.left = c[i] if pn.left is null; else
//   pn.right = c[i]

//     [0, 1, 2, 3, 4,  5, 6]; // index
// a = [1, 5, 5, 2, 2, -1, 3]; // parent
// c = [null; a.length] = [null; 7]; // created
//
// loop while i < a.length:
//   createNode(a, c, i);
//   i += 1;
// return tree;

function createTree(list) {
  if (null == list) return null;

  let tree = null;

  const createNode = (p, c, i) => {
    // Return if node already in `created`
    if (null != c[i]) return;

    // create new node and set in `created`
    const n = node(i);
    c[i] = n;

    // create new node if it is a root node
    if (p[i] == -1) {
      tree = c[i];
      return;
    }

    // create parent node if not found
    if (null == c[p[i]]) createNode(p, c, p[i]);

    // Get parent node in `created` and insert node from LTR
    const pn = c[p[i]];
    const dir = null == pn.left ? 'left' : 'right';

    pn[dir] = c[i];
  };

  const len = list.length;
  const created = Array.from(Array(len), () => null);

  let i = 0;
  while (i < len) {
    createNode(list, created, i);
    i += 1;
  }

  return tree;
}
```
