let arr = [true, false, false, true];

const countTrue = (r: boolean[]) => r.filter((l) => l).length;

console.log(countTrue(arr));
