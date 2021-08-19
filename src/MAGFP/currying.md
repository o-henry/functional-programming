# CURRYING

예상보다 적은 인자를 사용하여 함수를 호출할 수 있습니다. 나머지 인수를 사용하는 함수를 반환합니다. 한번에 모두 호출하거나, 각 인자에 대해 간단히 입력할 수 있습니다.

```js
const add = (x) => (y) => x + y;
const increment = add(1);
const addTen = add(10);

increment(2); // 3
addTen(2); // 12
```

`add` 함수는 하나의 인자를 사용하고 함수를 반환합니다. 이를 호출하면 반환된 함수는 클로저를 통해서 첫번째 인자를 기억합니다. 하지만 두 인자를 한번에 호출하는 것은 좀 괴로운 일이기 때문에 `curry`라는 기능을 이용하면 이런 기능을 정의하고 호출하기가 쉬워집니다.

```js
const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));
```

전략적으로 마지막 인수로(String, Array)를 사용하고 있습니다.

```js
match(/r/g, "hello world"); // [ 'r' ]

const hasLetterR = match(/r/g); // x => x.match(/r/g)
hasLetterR("hello world"); // [ 'r' ]
hasLetterR("just j and s and t etc"); // null

filter(hasLetterR, ["rock and roll", "smooth jazz"]); // ['rock and roll']

const removeStringsWithoutRs = filter(hasLetterR); // xs => xs.filter(x => x.match(/r/g))
removeStringsWithoutRs(["rock and roll", "smooth jazz", "drum circle"]); // ['rock and roll', 'drum circle']

const noVowels = replace(/[aeiou]/gi); // (r,x) => x.replace(/[aeiou]/ig, r)
const censored = noVowels("*"); // x => x.replace(/[aeiou]/ig, '*')
censored("Chocolate Rain"); // 'Ch*c*l*t* R**n'
```

여기서 설명하고 있는 것은, 이러한 인자를 기억하는 새로운 함수를 수신하기 위해 한두 개의 인수를 사용하여 함수를 pre-load 할수 있는 능력 입니다.

---

커링은 많은 부분에서 유용합니다. 우리는 `hasLetterR`, `removeStringWithoutRs`, `censord` 처럼 기본 함수에 몇가지 인자를 제공하기만 하면 새로운 함수를 만들 수 있습니다.
우리는 또한 단일요소에 작동하는 모든 기능을 단순히 map으로 래핑만으로 배열에서 작동하는 기능으로 변환할 수 있습니다.

```js
const getChildren = (x) => x.childNodes;
const allTheChildren = map(getChildren);
```

함수에 예상보다 적은 매개변수(인자) 를 제공하는 것을 일반적으로 부분 적용이라고 합니다. 함수를 부분 적용하면 많은 보일러 플레이트 코드를 제거할 수 있습니다.
일반적으로 배열에서 작동하는 함수를 정의하지 않습니다. 단순히 인라인으로 `map` 을 호출할 수 있기 때문입니다.
`sort`, `filter` 나 또다른 고차함수역시 같습니다.

우리가 순수함수에 대해 말할때, 하나의 인풋에 하나의 아웃풋을 갖는다고 했는데, 커링은 이를 충족합니다. 각각의 단일 인자는 나머지 인자를 예상하는 새로운 함수를 반환합니다.
아웃풋이 다른 함수여도 여전히 순수한 것으로 인정됩니다.

우리는 몇 개의 인수를 전달하는 것만으로 즉각적으로 새롭고 유용한 함수를 만들 수 있습니다.
