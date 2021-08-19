const { curry } = require("@mostly-adequate/support");
// words :: String -> [String]
const words = (str) => split(" ", str);
const words = split(" ");

// filterQs :: [String] -> [String]
const filterQs = (xs) => filter((x) => x.match(/q/i), xs);
const filterQs = filter(match(/q/i));

const filter = curry((f, xs) => xs.filter(f));
const match = curry((what, s) => s.match(what));

// Considering the following function:
const keepHighest = (x, y) => (x >= y ? x : y);
// max :: [Number] -> Number
const max = (xs) => reduce((acc, x) => (x >= acc ? x : acc), -Infinity, xs);
const max = reduce(keepHighest, -Infinity);
