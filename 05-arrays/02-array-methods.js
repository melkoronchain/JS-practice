// Array methods examples

const numbers = [1, 2, 3];

// push() — add element to the end
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]

// pop() — remove last element
numbers.pop();
console.log(numbers); // [1, 2, 3]

// unshift() — add element to the beginning
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3]

// shift() — remove first element
numbers.shift();
console.log(numbers); // [1, 2, 3]

// forEach() — iterate over array (no return value)
numbers.forEach((element, index) => {
  console.log(`Index ${index}: ${element}`);
});

// map() — create a new array based on transformation
const dividedNumbers = numbers.map(element => element / 2);
console.log(dividedNumbers); // [0.5, 1, 1.5]