function wrapIgnoreErrors(f) {
  return function (a1, a2, a3) {
    try {
      return f(a1, a2, a3);
    } catch (e) {
      return null;
    }
  };
}

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var plus10 = makeAdder(10);

console.log(plus10(12));
