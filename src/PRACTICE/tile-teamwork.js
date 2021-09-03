// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ false

const possibleBonus = (a, b) => b - a <= 6 && b - a > 0;
