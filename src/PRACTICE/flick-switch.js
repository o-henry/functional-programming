// flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

// flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

// flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]

// 재할당

const flickSwitch = (array, flag = true) =>
  array.map((x) => (x === "flick" ? (flag = !flag) : flag));

console.log(flickSwitch(["edabit", "flick", "eda", "bit"]));
console.log(flickSwitch(["flick", 11037, 3.14, 53]));
