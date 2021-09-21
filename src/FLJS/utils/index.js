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
    if (uniqList.indexOf(v) === -1) {
      uniqList.push(v);
    }
  }
  return uniqList;
}

function compose2(fn2, fn1) {
  return function composed(origValue) {
    return fn2(fn1(origValue)); //.. higher-order function
  };
}

function partialRight(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...laterArgs, ...presetArgs);
  };
}

function compose(...fns) {
  return function composed(result) {
    let list = [...fns];

    while (list.length > 0) {
      result = list.pop()(result);
    }

    return result;
  };
}

function skipShortWords(words) {
  var filteredWords = [];

  for (let word of words) {
    if (word.length <= 4) {
      filteredWords.push(word);
    }
  }

  return filteredWords;
}

// left-to-right
function pipe(...fns) {
  return function piped(result) {
    let list = [...fns];

    while (list.length > 0) {
      // list.shift() : fns 이므로 호출 가능하다.
      // currying => result를 인자로 넘긴다.
      result = list.shift()(result);
    }
    return result;
  };
}

module.exports = {
  partialRight,
  words,
  unique,
  compose2,
  compose,
  pipe,
  skipShortWords,
};
