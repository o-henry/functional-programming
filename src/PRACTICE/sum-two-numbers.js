// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

const addition = (a, b) => a + b;
const curry = (a) => (b) => a + b;

let b = curry(2);
let c = b(3);
console.log(c);
