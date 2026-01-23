# Statements in JavaScript

This section contains examples of JavaScript statements.
Statements control the flow of program execution.

---

## 1. try...catch Statement

The `try...catch` statement is used for error handling.
It allows you to safely execute code that may throw an error.

### Syntax

```js
try {
  // code that may throw an error
} catch (error) {
  // error handling
}
```
Example

```js
function throwError() {
  throw new Error('Something went wrong');
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

console.log('Program continues');
```
Output

Something went wrong
Program continues

Explanation
- throw generates an error
- try executes risky code
- catch handles the error
- Program execution continues after catch


## 2. if Statements

Multiple `if` statements are evaluated independently.
Each condition is checked even if a previous one was true.

Example:
- Useful when multiple conditions may apply at the same time

---

## 3. if / else if / else

This structure creates a conditional chain.
Only the first matching condition is executed.

Example:
- Useful when only one outcome should occur

---

## 4. switch Statement

The `switch` statement compares a value against multiple cases.

Example:
- Often used as an alternative to long `if / else if` chains

⸻

## ✅ Summary
 - try...catch is a statement
 - Used for handling runtime errors
 - Prevents application crashes
 - Errors are represented by Error objects
 - `if / if / if` checks all conditions independently
 - `if / else if / else` stops after the first true condition
 - `switch` is useful for comparing a single value
 - Statements control program flow and decision making



