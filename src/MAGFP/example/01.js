// OOP
class Flock {
  constructor(n) {
    this.seagulls = n;
  }

  conjoin(other) {
    this.seagulls += other.seagulls;
    return this;
  }

  breed(other) {
    this.seagulls = this.seagulls * other.seagulls;
    return this;
  }
}

const flockA = new Flock(4);
const flockB = new Flock(2);
const flockC = new Flock(0);

const result = flockA // return 32 , expect 16
  .conjoin(flockC)
  .breed(flockB)
  .conjoin(flockA.breed(flockB)).seagulls;

// FP
const add = (flockX, flockY) => flockX + flockY;
const multiply = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;

const result = add(
  multiply(flockB, add(flockA, flockC)),
  multiply(flockA, flockB)
); // 16

// math
// associative
add(add(x, y), z) === add(x, add(y, z));

// commutative
add(x, y) === add(y, x);

// identity
add(x, 0) === x;

// distributive
multiply(x, add(y, z)) === add(multiply(x, y), multiply(y, z));

// refactoring
// add(multiply(flockB, add(flockA, flockC)),multiply(flockA, flockB));
// add(multiply(flockB, flockA), multiply(flockA, flockB));
multiply(flockB, add(flockA, flockA));
