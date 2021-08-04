# CURRYING

예상보다 적은 인수를 사용하여 함수를 호출할 수 있습니다. 나머지 인수를 사용하는 함수를 반환합니다.

한번에 모두 호출하거나, 각 인수에 대해 간단히 입력할 수 있습니다.

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
