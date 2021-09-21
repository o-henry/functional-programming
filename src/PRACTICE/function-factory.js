// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

// const plusFive = makePlusFunction(5)
// plusFive(2) ➞ 7
// plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

// closure, currying
const makePlusFunction = (x) => (y) => x + y;

const plusTen = makePlusFunction(10);
console.log(plusTen(188));
