// solveForExp(4, 1024) ➞ 5

// solveForExp(2, 1024) ➞ 10

// solveForExp(9, 3486784401) ➞ 10

let a = 4,
  b = 1024;

const solveForExp = (a: number, b: number): number =>
  b > a ? 1 + solveForExp(a, b / a) : 1;

// const solveForExp = (a: number, b: number, i = 1): number =>
//   a ** i == b ? i : solveForExp(a, b, i + 1);
