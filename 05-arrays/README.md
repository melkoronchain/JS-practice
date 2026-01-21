# Arrays in JavaScript

Arrays are ordered collections of values.
In JavaScript, arrays can store elements of different data types and provide many built-in methods for working with data.

## 1 Creating Arrays

Arrays can be created using array literals or the Array constructor.

```js
const myArray = [1, true, 'Alex'];
console.log(myArray);

const myArray2 = new Array(50, true, null);
myArray2.push(undefined);
console.log(myArray2);
```

  - Arrays can contain mixed data types
  - push() adds a new element to the end of the array

⸻

  Accessing Elements

```js
console.log(myArray[0]);
```

  - Array indexing starts from 0

⸻

## 2 Array Methods

```js
push() and pop()

const numbers = [1, 2, 3];

numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

numbers.pop();
console.log(numbers); // [1, 2, 3]
```

 - push() adds an element to the end
 - pop() removes the last element

 unshift() and shift()

```js
 numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3]

numbers.shift();
console.log(numbers); // [1, 2, 3]
```

 - unshift() adds an element to the beginning
 - shift() removes the first element

Iterating Over Arrays

forEach()

```js
numbers.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`);
});
```

 - Creates a new array
 - Original array remains unchanged

 ## Summary
 - Arrays store ordered collections of values
 - Elements are accessed by index
 - push / pop work with the end of the array
 - unshift / shift work with the beginning
 - forEach is used for iteration
 - map is used for transforming data into a new array