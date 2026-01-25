// import default export (name can be anything)
import sum from './moduleOne.mjs';

// import named exports with renaming
import {
  one as renamedOne,
  two
} from './moduleOne.mjs';

const trueSum = sum(19, 100);
console.log(trueSum); // 119

console.log(renamedOne); // 10
console.log(two);        // null