// functional-light-js chapter 4
const {
  partialRight,
  compose2,
  unique,
  words,
  compose,
  skipShortWords,
} = require("./utils/index");

let text =
  "To compose two functions together, pass the \
output of the first function call as the input of the \
second function call.";

// 일반적인 사용례
let wordsFound = words(text);
let wordsUsed = unique(wordsFound);

// 고차 함수!
let newWordsUsed = unique(words(text)); // read left-to-right --the order of operations right-to-lefts

// uniqueWrods composition of the two functions
// wordsUsed <-- unique <-- words <-- text
function uniqueWords(str) {
  return unique(words(str));
}

let newUniqueWords = compose2(unique, words);
let letters = compose2(words, unique);

// let chars = newUniqueWords("How are you Henry?"); // ['how', 'are', 'you', 'henry']
let chars = letters("How are you Henry?"); //[ 'h', 'o', 'w', 'a', 'r', 'e', 'y', 'u', 'n' ]
// 순서에 따라 값이 변한다. -> 순서가 중요하다 ?

/**
 * @content { general composition }
 */

// let biggerWords = compose(skipShortWords, unique, words);
// let wordsbig = biggerWords(text);

let filterWords = partialRight(compose, unique, words);
let shorterWords = filterWords(skipShortWords);

console.log(shorterWords(text));
