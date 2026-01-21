// try...catch statement example

function throwError() {
  throw new Error('Something went wrong');
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

console.log('Program continues');