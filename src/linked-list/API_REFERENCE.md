# Linked List <!-- omit in toc -->

## Table of contents <!-- omit in toc -->
- [API Reference](#api-reference)
  - [Node](#node)
  - [Traversal](#traversal)
  - [Insertion](#insertion)
    - [Prepend](#prepend)
    - [Insert](#insert)
    - [Insert before node](#insert-before-node)
    - [Insert after node](#insert-after-node)
    - [Append](#append)
  - [Deletion](#deletion)
    - [Delete with value](#delete-with-value)
    - [Delete with position](#delete-with-position)
    - [Delete all nodes](#delete-all-nodes)
  - [Get length](#get-length)
  - [Search](#search)
  - [Retrieval](#retrieval)
    - [Retrieve nth node](#retrieve-nth-node)
    - [Retrieve nth node from the end](#retrieve-nth-node-from-the-end)
    - [Get middle node](#get-middle-node)
  - [Counting](#counting)
  - [Detecting loops](#detecting-loops)
  - [Counting loops](#counting-loops)
  - [Checking if palindrome](#checking-if-palindrome)
  - [Remove duplicates from a sorted linked list](#remove-duplicates-from-a-sorted-linked-list)
  - [Remove duplicates from an unsorted linked list](#remove-duplicates-from-an-unsorted-linked-list)
  - [Swap nodes without swapping data](#swap-nodes-without-swapping-data)
  - [Pairwise swap elements](#pairwise-swap-elements)
  - [Move last element to front](#move-last-element-to-front)
  - [Intersection of 2 sorted linked list](#intersection-of-2-sorted-linked-list)
  - [Get intersection node of 2 linked list](#get-intersection-node-of-2-linked-list)
  - [Quick Sort linked list](#quick-sort-linked-list)
  - [Segregate even and odd nodes](#segregate-even-and-odd-nodes)
  - [Reverse a linked list](#reverse-a-linked-list)

## API Reference

### Node

```ts
function LinkedListNode(value, next = null) {
  return { value, next };
}
```

### Traversal

```ts
// Time complexity: O(n)
// Space complexity: O(n) as this function stores all nodes in `d`

function traverseList(list) {
  let node = list;
  const d = [];

  while (node) {
    d.push(node.value);
    node = node.next;
  }

  return d;
}
```

### Insertion

There are **3** different ways to insert a node into a linked list:

* As its new head
* Somewhere in the middle
* As its new tail

#### Prepend

```ts
// Time complexity: O(1)
// Space complexity: O(1)

function prepend(list, value) {
  const node = LinkedListNode(value);

  if (null == list) return node;

  node.next = list;

  return list;
}
```

#### Insert

#### Insert before node

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function insertBeforeNode(list, node, value) {
  const n = LinkedListNode(value);

  if (null == node) { throw new TypeError(`'node' cannot be null`); }
  if (null == list) return n;

  if (list === node) {
    n.next = list;
    return n;
  }
  
  let cur = list;
  while (cur.next && cur.next !== node) cur = cur.next;

  n.next = node;
  cur.next = n;

  return list;
}
```

#### Insert after node

```ts
// Time complexity: O(1)
// Space complexity: O(1)

function insertAfterNode(list, node, value) {
  const n = LinkedListNode(value);
  
  if (null == node) { throw new TypeError(`'node' cannot be null`); }
  if (null == list) return n;

  n.next = node.next;
  node.next = n;

  return list;
}
```

#### Append

```ts
// Time complexity: O(1)
// Space complexity: O(1)

function append(list, value) {
  const node = LinkedListNode(value);

  if (null == list) return node;

  let cur = list;
  while (cur) cur = cur.next;

  cur.next = node;

  return list;
}
```

### Deletion

#### Delete with value

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function deleteNode(list, value) {
  if (null == list) return list;

  if (list.value === value) {
    const cur = list.next;
    list.next = null;

    return cur;
  }

  let cur = list;
  while (cur.next && cur.next.value !== value) cur = cur.next;

  if (null == cur.next) return list;
  
  // cur.next = cur.next.next; does the trick too.
  // But the deleted node will still point to linked list.
  // We should unlink the deleted node before the deletion.
  const deleted = cur.next;
  cur.next = deleted.next;
  deleted.next = null; // Unlink the deleted node

  return list;
}
```

#### Delete with position

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function deleteNodeAt(list, index) {
  if (null == list || index < 0) return list;

  if (!index) {
    const cur = list.next;
    list.next = null;

    return cur;
  }

  let cur = list;
  let i = 0;
  // `index - 1` is needed when you traverse the linked list,
  // you need to ensure you are always 1 node before the node positioned at `index`.
  //
  // 0 ---> 1 ---> 2, delete `index=1`
  // In the case above, if we do `index`, the `while` loop below will fulfill and `cur` will
  // then point at 1 which renders us not being able to delete 1. For deletion, we
  // need to always be 1 node before 1, so that we can link 0 to 2.
  while (cur.next && i < index - 1) {
    cur = cur.next;
    i += 1;
  }

  if (null == cur.next) return list;
  

  // cur.next = cur.next.next; does the trick too.
  // But the deleted node will still point to linked list.
  // We should unlink the deleted node before the deletion.
  const deleted = cur.next;
  cur.next = delete.next;
  deleted.next = null; // Unlink the deleted node

  return list;
}
```

#### Delete all nodes

```ts
// Time complexity: O(1)
// Space complexity: O(1)

function deleteAllNodes(list) {
  return null;
}
```

### Get length

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function len(list) {
  if (null == list) return 0;
  
  let cur = list;
  let count = 1;
  while (cur.next) {
    count += 1;
    cur = cur.next;
  }

  return count;
}
```

### Search

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function searchNode(list, value) {
  if (null == list) return false;

  let cur = list;
  while (cur.next && cur.value !== value) cur = cur.next;

  return cur.value === value;
}
```

### Retrieval

#### Retrieve nth node

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function getNodeAt(list, index) {
  if (null == list || index < 0) return null;
  if (!index) return list.value;

  let cur = list;
  let i = 0;
  while (i < index) {
    cur = cur.next;
    i += 1;
  }

  return null == cur ? null : cur.value;
}
```

#### Retrieve nth node from the end

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function getNodeFromEndAt(list, index) {
  if (null == list || index < 1) return null;
  
  let cur = list;
  let count = 1;
  while (cur.next) {
    count += 1;
    cur = cur.next;
  }

  if (index > count) return null;

  const indexFromStart = count - index;
  let i = 0;
  cur = list;
  while (i < indexFromStart) {
    cur = cur.next;
    i += 1;
  }

  return cur.value;
}
```

#### Get middle node

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function getMidNode(list) {
  if (null == list) return null;
  
  let slowMark = list;
  let fastMark = list;
  if (fastMark && fastMark.next) {
    slowMark = slowMark.next;
    fastMark = fastMark.next.next;
  }

  return slowMark.value;
}
```

### Counting

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function countNode(list, value) {
  if (null == list) return 0;

  let count = 0;
  let cur = list;
  while (null != cur) {
    if (cur.value === value) count += 1;
    cur = cur.next;
  }

  return count;
}
```

### Detecting loops

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function detectLoop(list) {
  if (null == list) return false;

  // Use the same algorithm to find the mid node in a linked list
  let slowMark = list;
  let fastMark = list;
  while (slowMark && fastMark && fastMark.next) {
    slowMark = slowMark.next;
    fastMark = fastMark.next.next;

    if (slowMark === fastMark) return true;
  }

  return false;
}
```

### Counting loops

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function countLoopNodes(list) {
  if (null == list) return 0;

  let slowMark = list;
  let fastMark = list;
  while (slowMark && fastMark && fastMark.next) {
    slowMark = list.next;
    fastMark = fastMark.next.next;

    if (slowMark === fastMark) break;
  }

  let count = 1;
  let cur = slowMark;
  while (cur.next !== slowMark) {
    count += 1;
    cur = cur.next;
  }

  return count;
}
```

### Checking if palindrome

```ts
function reverseLinkedList(list) {
  let prev = null;
  let cur = list;
  let next = null;
  while (null != cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next; 
  }

  return prev;
}

function compareList(first, second) {
  let cur1 = first;
  let cur2 = second;
  while (null != cur1 && null != cur2) {
    if (first.value !== second.value) return false;
    cur1 = cur1.next;
    cur2 = cur2.next;
  }

  if (null == cur1 && null == cur2) return true;

  return false;
}

function checkIfPalindrome(list) {
  if (null == list) return true;

  let prevSlowMark = list;
  let slowMark = list;
  let fastMark = list;
  while (slowMark && fastMark && fastMark.next) {
    prevSlowMark = slowMark;
    slowMark = slowMark.next;
    fastMark = fastMark.next.next;
  }

  let mid = null;
  const isOdd = null != fastMark;
  if (isOdd) {
    mid = slowMark;
    slowMark = slowMark.next;
  }
  
  prevSlowMark.next = null;
  let secondHalf = reverse(slowMark);
  const res = compareList(list, secondHalf);

  // Restore reverse
  secondHalf = reverse(secondHalf);
  prevSlowMark.next = secondHalf;
  if (isOdd) { // Stitch mid node for odd nodes
    prevSlowMark.next = mid;
    mid.next = secondHalf;
  }

  return res;
}
```

### Remove duplicates from a sorted linked list

```ts
// Time complexity: O(n^2)
// Space complexity: O(1)

function removeDuplicatesFromSortedLinkedList(list) {
  if (null == list) return list;

  let cur = list;
  while (null != cur) {
    let temp = cur;

    while (null != temp && cur.value === prev.value) {
      temp = temp.next;
    }

    cur.next = temp;
    cur = temp;
  }

  return list;
}
```

### Remove duplicates from an unsorted linked list

```ts
// 1, 2, 1, 4, 3, 1, 1

// 1, 2, 1, 4, 3, 1, 1, prev = 1; cur = 1; {}
// 1, 2, 1, 4, 3, 1, 1, prev = 2; cur = 2; {1}
// 1, 2, 4, 3, 1, 1, prev = 2; cur = 2; {1, 2}
// 1, 2, 4, 3, 1, 1, prev = 4; cur = 4; {1, 2}
// 1, 2, 4, 3, 1, 1, prev = 3; cur = 3; {1, 2, 4}
// 1, 2, 4, 3, 1, prev = 3; cur = 3; {1, 2, 4, 3}
// 1, 2, 4, 3, prev = 3; cur = 3; {1, 2, 4, 3}
// 1, 2, 4, 3, prev = null; cur = null; {1, 2, 4, 3}

// Time complexity: O(n)
// Space complexity: O(n)

function removeDuplicatesFromUnsortedLinkedList(list) {
  if (null == list) return list;

  const visited = new Set();
  let prev = list;
  let cur = list;

  while (null !== cur) {
    visited.add(cur.value);
    cur = cur.next;

    if (null != cur && visited.has(cur.value)) {
      // Link `prev.next` to the next node of `cur`.
      prev.next = cur.next;

      // Unlink `cur.next` and move `cur` to `prev`
      // so that we can start from `prev` again and move `cur` to `cur.next`
      cur.next = null;
      cur = prev;
      continue;
    }

    prev = cur;
  }

  return list;
}
```

### Swap nodes without swapping data

```ts
// 10 - 15 - 12 - 13 - 20 - 14, x = 10, y = 20
//
//          t              h
// pX cX             pY   cY
//  - 10 - 15 - 12 - 13 - 20 - 14
//
// h = cY;
// pY.next = cX;
// t = cX.next;
// cX.next = cY.next;
// cY.next = t;

// 10 - 15 - 12 - 13 - 20 - 14, x = 20, y = 10
//
//                         h    t
// pY cY             pX   cX
//  - 10 - 15 - 12 - 13 - 20 - 14
//
// h = cX;
// pX.next = cY;
// t = cX.next
// cX.next = cY.next;
// cY.next = t;

// Time complexity: O(n)
// Space complexity: O(1)

function swapNodesWithoutSwappingData(list, x, y) {
  // Return when list is null or x and y are equal
  if (null == list || x === y) return list;

  // 1. Traverse to find x- and y-nodes
  // 2. If x- and y-nodes present, swap 2 nodes, else return list
  let pX = null;
  let cX = list;

  let pY = null;
  let cY = list;

  let prev = list;
  let cur = list;
  while (null != cur) {
    const curVal = cur.value;

    if (x === curVal) { pX = prev; cX = cur; }
    if (y === curVal) { pY = prev; cY = cur; }

    prev = cur;
    cur = cur.next;
  }

  // Bails out when either of which are not found in the linked list
  if (null == cX || null == cY) return list;

  let head = list;

  if (null == pX) head = cY; else pX.next = cY;
  if (null == pY) head = cX; else pY.next = cX;

  let t = cX.next;
  cX.next = cY.next;
  cY.next = t;

  return head;
}
```

### Pairwise swap elements

```ts
// 1 - 2 - 3 - 4 - 5 - 6 - 7

// p   c
// 1 - 2 - 3 - 4 - 5 - 6 - 7
//
// run:
// p.next = c.next;
// c.next = p;
// return if null == p.next or null == p.next.next;
// p = p.next;
// c.next.next = p.next;
// c = p.next;

//         p   c
// 2 - 1   3 - 4 - 5 - 6 - 7
//     v-------^
//
// {run}

//                 p   c
// 2 - 1 - 4 - 3   5 - 6 - 7
//             v-------^
//
// {run}

//                 c   p
// 2 - 1 - 4 - 3 - 6 - 5 - 7

// Time complexity: O(n)
// Space complexity: O(1)

function pairwiseSwap(list) {
  // Bails out when `list` has < 2 nodes
  if (null == list || null == list.next) return list;

  let p = list;
  let c = list.next;
  let head = c;

  while (null != c) {
    p.next = c.next;
    c.next = p;

    if (null == p.next || null == p.next.next) break;

    p = p.next;
    c.next.next = p.next;
    c = p.next;
  }

  return head;
}
```

### Move last element to front

```ts
// Time complexity: O(n)
// Space complexity: O(1)

function moveLastElementToFront(list) {
  if (null == list || null == list.next) return list;

  let p = list;
  let c = list.next;
  let head = list;

  while (null != c.next) {
    p = c;
    c = c.next;
  }

  p.next = c.next;
  c.next = head;

  // Unlink head
  head = null;

  return c;
}
```

### Intersection of 2 sorted linked list

```ts
// Time complexity: O(n)
// Space complexity: O(n) where n is the maximum number of elements

function sortedIntersect(x, y) {
  if (null == x || null == y) return null;

  let result = null;
  let cRes = null;
  let cX = x;
  let cY = y;

  while (null != cX && null != cY) {
    const cXVal = cX.value;
    const cYVal = cY.value;

    if (cXVal === cYVal) {
      if (null == result) cRes = (result = node(cXVal));
      else cRes = (cRes.next = node(cXVal));

      cX = cX.next;
      cY = cY.next;
    } else if (cXVal < cYVal) {
      cX = cX.next;
    } else {
      cY = cY.next;
    }
  }

  return result;
}
```

### Get intersection node of 2 linked list

```ts
// Time complexity: O(m + n)
// Space complexity: O(1)

function getIntersectionNode(x, y) {
  if (null == x || null == y) return null;

  const len = (n) => {
    if (null == n) return 0;

    let count = 1;
    let c = n;
    while (null != c) {
      count += 1;
      c = c.next;
    }

    return count;
  };

  const countX = len(x);
  const countY = len(y);
  const diff = countX - countY;

  // Offset starting node for longest linked list
  const startNodeAt = (n, i) => {
    let ni = i;
    let cn = n;
    while (ni) {
      cn = cn.next;
      ni -= 1;
    }

    return cn;
  };
  const findNode = (a, b) => {
    let cA = a;
    let cB = b;
    while (null != cA && null != cB) {
      if (cA.value === cB.value) return cA; // return intersection node: cA or cB
      
      cA = cA.next;
      cB = cB.next;
    }

    return null;
  };

  if (!diff) {
    // x == y
    return findNode(x, y);
  } else if (diff > 0) {
    // x > y
    return findNode(startNodeAt(x), y);
  } else {
    // y > x
    return findNode(x, startNodeAt(y));
  }
}
```

### Quick Sort linked list

```ts
// Time complexity: O(n log n) on average; O(n^2) for worst-case
// Space complexity: O(n)

// 0a
// 30 - 3 - 4 - 20 - 5

//  1a
//  p   h
// 30   3 - 4 - 20 - 5
//  l
//  3 - 4 - 20 - 5
//  r = null

//  2a
//  p  h
//  3  4 - 20 - 5
//  l = null
//  r
//  4 - 20 - 5

//  3a
//  p  h
//  4  20 - 5
//  l = null
//  r
//  20 - 5

//  4a
//  p  h
//  20 5
//  l
//  5
//  r = null

//  4b
//  join(l, p, r):
//  return (5, 20, null);

//  3b
//  join(l, p, r):
//  return (null, 4, 5 - 20 - null);

//  2b
//  join(l, p, r):
//  return (null, 3, 4 - 5 - 20 - null);

//  1b
//  join(l, p, r):
//  return (3 - 4 - 5 - 20 - null, 30, null)

//  0b
//  return (3 - 4 - 5 - 20 - 30 - null);

function quickSort(list) {
  if (null == list || null == list.next) return list;

  const mergeLinkedList = (l, p, r) => {
    const join = (m, n) => {
      if (null == m) return n;

      let c = m;
      while (null != c && null != c.next) c = c.next;

      c.next = n;

      return m;
    };

    let m = null;
    if (null != l) m = l;
    if (null != p) m = join(m, p);
    if (null != r) m = join(m, r);

    return m;
  };

  let left = null;
  let right = null;
  const pivot = node(list.value);

  let cur = list.next;
  let cl = left;
  let cr = right;
  while (null != cur) {
    if (cur.value <= pivot.value) {
      if (null == left) { left = cur; cl = left; }
      else { cl.next = cur; cl = cl.next; }
    } else {
      if (null == right) { right = cur; cr = right; }
      else { cr.next = cur; cr = cr.next; }
    }

    cur = cur.next;
  }

  // Unlink `cl.next` and `cr.next`
  if (null != cl) cl.next = null;
  if (null != cr) cr.next = null;

  return mergeLinkedList(quickSort(left), pivot, quickSort(right));
}
```

### Segregate even and odd nodes

```ts
// Time complexity: O(n)
// Space complexity: O(1)

// 17 - 15 - 8 - 12 - 10 - 4 - 1 - 7 - 6 - null

//  e
//  p    c
// 10 - -3 - 4 - 20 - 15

//      e
//           p    c
// 10 - 4 - -3 - 20 - 15

//           e
//                p    c
// 10 - 4 - 20 - -3 - 15

//           e
//                     p    c
// 10 - 4 - 20 - -3 - 15

function segregateEvenOddNodes(list) {
  if (null == list || null == list.next) return list;
  
  const isEven = n => !(n & 1);

  let h = list; // head
  let e = null; // even's tail

  // 1. Find tail of even
  if (isEven(list.value)) {
    let c = list;
    while (null != c && null != c.next && isEven(c.next.value)) c = c.next;

    e = c;
  }

  // 2. Traverse to find even node
  let p = list;
  let c = list.next;

  if (null != e) {
    p = e;
    c = e.next;
  }

  while (null != c) {
    if (isEven(c.value)) {
      p.next = c.next;

      // 3a. Set current node as `e` is `e` is null
      if (null == e) {
        c.next = h;
        h = (e = c);
      } else {
        // 3b. Insert current node to the tail of `e`
        c.next = e.next;
        e = (e.next = c); 
      }

      // 4. Update `c` to next element `p` points at
      c = p.next;
      continue;
    }

    p = c;
    c = c.next;
  }

  return h;
}
```

### Reverse a linked list

```ts
// Time complexity: O(n)
// Space complexity: O(1)

//       t
//  p    c
// null  1 - 2 - 3 - 4 - null

//           t
//        p  c
// null - 1  2 - 3 - 4 - null

//               t
//            p  c
// null - 1 - 2  3 - 4 - null

//                   t
//                p  c
// null - 1 - 2 - 3  4 - null

//                          t
//                    p     c
// null - 1 - 2 - 3 - 4  null

function reverseLinkedList(list) {
  while (null == list || null == list.next) return list;

  let p = null;
  let c = list;
  let t = list;
  while (null != c) {
    t = c.next;
    c.next = p;
    p = c;
    c = t;
  }

  return p;
}
```

