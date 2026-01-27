# Promises & Async in JavaScript

This section demonstrates different ways to work with asynchronous code in JavaScript:
- Promises
- .then() / .catch()
- async / await
- Error handling
- Timing async operations


## 1. Fetch with .then() and .catch()

Basic example of using fetch with Promise chaining.

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(json => console.log(json))
  .catch(error => console.error(error));
  ```

  What happens:
- fetch() returns a Promise
- response.json() returns another Promise
- .then() is used to handle resolved values
- .catch() handles errors


## 2. Wrapping fetch into a Custom Promise

This example shows how to wrap async logic into your own Promise

```js
const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  );

getData('https://jsonplaceholder.typicode.com/todos/1')
  .then(json => console.log(json))
  .catch(error => console.error(error));
```

Key idea:
- The function always returns a Promise
- Consumer only works with the final data
- Internal implementation is hidden


## 3. async Function Error Handling

Example showing that async functions return Promises
and how errors are handled with .catch().

```js
const myAsync = async () => {
  throw new Error('Fatal Error!');
};

myAsync()
  .then(value => console.log(value))
  .catch(error => console.log(error.message));
```

Important:
- Throwing an error inside async automatically rejects the Promise
- .catch() receives that error


## 4. Measuring Async Execution Time with await

Using async / await with a timer to measure execution duration.

```js
const myPromise = () =>
  new Promise(resolve =>
    setTimeout(() => resolve(), 2000)
  );

const asyncFn = async () => {
  console.log('Timer starts!');
  const start = performance.now();

  await myPromise();

  const end = performance.now();
  console.log('Timer ended!', end - start);
};

asyncFn();
```

What this demonstrates:
- await pauses execution until Promise resolves
- Async code can be measured like synchronous code
- Useful for performance analysis

⸻

5. Fetch with async / await and try / catch

Modern and clean way to work with async requests.

```js
const getTodo = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = 'https://jsonplaceholder.typicode.com/todos/1';

try {
  const data = await getTodo(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
```

Highlights:
- async functions always return a Promise
- await replaces .then()
- try / catch replaces .catch()
- Code is easier to read and debug

⸻

## Summary
- Promises represent future values
- fetch() always returns a Promise
- .then() / .catch() handle resolved and rejected Promises
- async / await is syntax sugar over Promises
- try / catch works with async code
- Errors thrown inside async reject the Promise
- Async code can be measured and controlled
- async / await is the modern and preferred approach