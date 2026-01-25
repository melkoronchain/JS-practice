# Loops in JavaScript

This section demonstrates how to work with arrays, objects, and strings using different loop statements in JavaScript.

Loops allow you to iterate (repeat actions) over data structures such as arrays, objects, and strings.


## 1. for Loop (Array Iteration)

Used when you need full control over the index.

```js
const myArray = [1, 2, 3];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

- Commonly used for arrays
- Gives access to index
- More verbose than array methods


## 2. while Loop

Executes code while a condition is true.

```js
let i = 10;

while (i <= 10) {
  console.log(i);
  i++;
}
```

- Be careful: wrong condition can cause an infinite loop.


## 3. do...while Loop

Executes code at least once, even if the condition is false.

```js
let b = 0;

do {
  console.log(b);
  b++;
} while (b < 10);
```

- Useful when the first execution must always happen.


## 4. for...in Loop (Objects)

Used to iterate over object keys.

```js
const myObject = {
  a: true,
  b: null,
  c: 10
};

for (const key in myObject) {
  console.log(key, myObject[key]);
}
```

- Best for objects
- Not recommended for arrays


## 5. for...of Loop (Iterable Values)

Used to iterate over values of iterable objects (arrays, strings).

```js
const myString = 'Hey';

for (const char of myString) {
  console.log(char);
}
```

- Works with arrays, strings, maps, sets
- Does not work directly with plain objects


## Summary
- for — classic loop with index control
- while — runs while condition is true
- do...while — runs at least once
- for...in — iterates over object keys
- for...of — iterates over iterable values
- Loops are used for iteration
- Choosing the right loop improves readability and safety