class NumbersArray extends Array {
  sum() {
    return this.reduce((acc, el) => acc + el, 0);
  }
}

const newArray = new NumbersArray(1, 2, 3, 10);

console.log(newArray);       // NumbersArray(4) [1,2,3,10]
console.log(newArray.sum()); // 16