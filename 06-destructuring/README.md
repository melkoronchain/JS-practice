# Destructuring in JavaScript

Destructuring allows you to extract values from objects and arrays
into separate variables using a concise syntax.

---

## 1. Object Destructuring

You can extract properties from an object into variables.

```js
const user = { name: 'Nick', age: 34 };
const { name, age } = user;
```

This makes the code cleaner and avoids repetitive object access.

## 2. Array Destructuring

You can extract values from an array based on position.

```js
const countries = ['England', 'Germany'];
const [first, second] = countries;
```
## 3. Destructuring in Function Parameters

Destructuring can be used directly in function parameters.

```js
const getUserInfo = ({ user, commentsQty }) => {
  return commentsQty
    ? `User ${user} has ${commentsQty} comments`
    : `User ${user} has no comments`;
};
```

This pattern is commonly used in real-world JavaScript code.

## sSummary
 - Destructuring works with objects and arrays
 - Object destructuring is based on property names
 - Array destructuring is based on position
 - Destructuring in function parameters improves readability