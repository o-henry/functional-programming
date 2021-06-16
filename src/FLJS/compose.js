// functional-light-js chapter 4

function words(str) {
  return String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter(function alpha(v) {
      return /^[\w]+$/.test(v);
    });
}

function unique(list) {
  let uniqList = [];

  for (let v of list) {
    // value not yet in the new list?
    if (uniqList.indexOf(v) === -1) {
      uniqList.push(v);
    }
  }

  return uniqList;
}

let text =
  "To compose two functions together, pass the \
output of the first function call as the input of the \
second function call.";

let wordsFound = words(text);
let wordsUsed = unique(wordsFound);
let newWordsUsed = unique(words(text)); // read left-to-right --the order of operations right-to-lefts

// uniqueWrods composition of the two functions
// wordsUsed <-- unique <-- words <-- text
function uniqueWords(str) {
  return unique(words(str));
}

function compose2(fn2, fn1) {
  return function composed(origValue) {
    return fn2(fn1(origValue)); //.. higher-order function
  };
}

let newUniqueWords = compose2(unique, words);
let letters = compose2(words, unique);
// let chars = newUniqueWords("How are you Henry?"); // ['how', 'are', 'you', 'henry']
// let chars = letters("How are you Henry?"); //[ 'h', 'o', 'w', 'a', 'r', 'e', 'y', 'u', 'n' ]
console.log(chars);
