```js
const compose =
  (...fns) =>
  (...args) =>
    fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
```

```js
const compose2 = (f, g) => (x) => f(g(x));
```

f 와 g는 함수이며 x는 f,g를 통해 piped 되는 값입니다.
결합하고 싶은 특성 두가지를 선택하여 함꼐 섞어 새로운 함수를 생성합니다.

```js
const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(exclaim, toUpperCase);

shout("send in the clowns"); // "SEND IN THE CLOWNS!"
```

두 함수의 composition은 새로운 함수를 반환합니다. 일부 유형의 두 단위를 합성함으로써 바로 그 유형의 새로운 단위를 산출합니다.
위에서 정의한 compose에서는 g 함수가 f 함수 이전에 실행됩니다. 오른쪽에서 왼쪽으로 데이터 흐름을 생성합니다.
이는 함수 호출을 중첩하는 것보다 훨씬 읽기 쉽습니다. 안과 밖이 아니라, 우리는 오른쪽에서 왼쪽으로 실행합니다.

```js
const head = (x) => x[0];
const reverse = reduce((acc, x) => [x, ...acc], []);
const last = compose(head, reverse);

last(["jumpkick", "roundhouse", "uppercut"]); // 'uppercut'
```

```js
// associativity
compose(f, compose(g, h)) === compose(compose(f, g), h);

compose(toUpperCase, compose(head, reverse));
// or
compose(compose(toUpperCase, head), reverse);
```

어떻게 묶는지는 중요하지 않아 위 처럼 사용할 수 있습니다. 결과는 같습니다. 이를 통해 다음과 같이 다양한 compose를 작성하고 사용할 수 있습니다.

```js
// previously we'd have to write two composes, but since it's associative,
// we can give compose as many fn's as we like and let it decide how to group them.
const arg = ["jumpkick", "roundhouse", "uppercut"];
const lastUpper = compose(toUpperCase, head, reverse);
const loudLastUpper = compsoe(exclaim, toUpperCase, head, reverse);

lastUpper(arg); // 'UPPERCUT'
loudLastUpper(arg); // 'UPPERCUT!'
```

결합법칙을 적용하면 유연성과 결과값이 동일하다는 것에 안정을 얻을 수 있습니다.
결합법칙의 이점 중 하나는 함수의 그룹을 추출하고 함께 묶을 수 있다는 것입니다.

```js
const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);

// -- or ---------------------------------------------------------------

const last = compose(head, reverse);
const loudLastUpper = compose(exclaim, toUpperCase, last);

// -- or ---------------------------------------------------------------

const last = compose(head, reverse);
const angry = compose(exclaim, toUpperCase);
const loudLastUpper = compose(angry, last);

// more variations...
```

여기에는 틀린, 옳은 답은 없습니다. 우린 그저 우리가 원하는 방식으로 우리의 레고를 조립하고 있을 뿐입니다.
일반저긍로 last나 angry처럼 재사용 가능한 방법으로 묶는것이 좋습니다.

---

## Pointfree

포인트프리 스타일은 데이터를 말할 필요가 없다는 것을 의미합니다. 작동되는 데이터를 언급하지 않는 함수를 의미합니다.
일급 객체 함수, 커링, 컴포지션 모두 잘 어우러져 이 스타일을 만들어냅니다.

```js
// not pointfree because we mention the data: word
const snakeCase = (word) => word.toLowerCase().replace(/\s+/gi, "_");

// pointfree
const snakeCase = compose(replace(/\s+/gi, "_"), toLowerCase);
```

우리는 어떻게 replace를 부분적으로 적용했나요? 우리가 한것은 한개의 인자의 각 함수에 데이터를 연결하는 것 입니다.
커링은 각각의 함수를 준비하여 데이터를 가지고 가서 조작하고 전달할 수 있게 해줍니다.
pointfree 버전에서는 함수를 구성하기위해 데이터가 필요하지 않다는 것을 알아두어야 합니다. 반면에 pointful 한 함수는 다른 무엇보다 word가 필요합니다.

```js
// not pointfree because we mention the data: name
const initials = (name) =>
  name.split(" ").map(compose(toUpperCase, head)).join(". ");

// pointfree
// NOTE: we use 'intercalate' from the appendix instead of 'join' introduced in Chapter 09!
const initials = compose(
  intercalate(". "),
  map(compose(toUpperCase, head)),
  split(" ")
);

initials("hunter stockton thompson"); // 'H. S. T'
```

Pointfree 코드는 필요없는 name 을 제거하고, 간결하고 제네릭한 것으로 유지할 수 있도록 도와줍니다.
하지만 때때로 Pointfree는 양날의 검입니다. 모든 함수가 pointfree 가 아니여도 괜찮습니다. 사용할 수 있는 부분은 pointfree로 구성하고 이외에는 보통의 함수로 구성하겠습니다.

---

## Debugging

일반적인 실수는 먼저 map과 같은 것을 부분적으로 적용하지 않고 두 인자의 함수를 구성하는 것 입니다.

```js
// wrong - we end up giving angry an array and we partially applied map with who knows what.
const latin = compose(map, angry, reverse);

latin(["frog", "eyes"]); // error

// right - each function expects 1 argument.
const latin = compose(map(angry), reverse);

latin(["frog", "eyes"]); // ['EYES!', 'FROG!'])
```

```js
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const dasherize = compose(
  intercalate("-"),
  toLower,
  split(" "),
  replace(/\s{2,}/gi, " ")
);

dasherize("The world is a vampire");
// TypeError: Cannot read property 'apply' of undefin
```

---

## Categoryu Theory
