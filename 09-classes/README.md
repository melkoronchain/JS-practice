# Classes in JavaScript

This section demonstrates how classes work in JavaScript, including:
- creating instances
- instance methods
- static methods
- class inheritance (extends)

Classes are a higher-level syntax over JavaScript’s prototype system and are used to create reusable object templates.


## 1. Class Basics (Instances and Methods)

```js
class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  upvote() {
    this.votesQty += 1;
  }
}

const firstComment = new Comment('Hello Man!');
firstComment.upvote();

const secondComment = new Comment('Hello Woman!');
secondComment.upvote();
```


- class Comment defines a blueprint for creating objects
- constructor() runs automatically when new Comment() is called
- this refers to the newly created instance
- upvote() is an instance method
- Each instance has its own independent state


## 2. Static Methods

```js
class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }

  static mergeComments(first, second) {
    return `${first} ${second}`;
  }
}

Comment.mergeComments('Hello', 'World!');
```


- static methods belong to the class itself, not to instances
- They are called directly on the class: Comment.mergeComments()
- Instances do not have access to static methods
- Used for utility or helper logic related to the class


## 3. Extending Built-in Classes

```js
class NumbersArray extends Array {
  sum() {
    return this.reduce((acc, el) => acc + el, 0);
  }
}

const numbers = new NumbersArray(1, 2, 3, 10);
numbers.sum(); // 16
```


- extends Array creates a subclass of the built-in Array
- The new class inherits all array methods (map, filter, reduce, etc.)
- Custom methods can be added (sum())
- this refers to the array instance itself


## Summary
- Classes are templates for creating objects
- constructor() defines initial properties for each instance
- Instance methods work with this and modify object state
- Static methods belong to the class, not instances
- extends allows inheriting behavior from other classes
- Under the hood, classes still use JavaScript prototypes

Classes help organize code, improve readability, and model real-world entities.