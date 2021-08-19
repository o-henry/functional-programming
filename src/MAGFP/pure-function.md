## Oh to Be Pure Again

`순수함수`는 동일한 input 에는 항상 동일한 output을 리턴해야 하고, 사이드 이펙트가 없는 함수다.
`slice` 와 `splice`는 같은 동작을 하나 pure/impure로 나뉜다.
함수형 프로그래밍에서는 `splice` 같이 data를 변경시키는 다루기 힘든 함수를 싫어한다.

```js
// impure
let minimum = 21;
const checkAge = (age) => age >= minimum;

// pure
const chekcAge = (age) => {
  const minimum = 21;
  // const immutableState = Object.freeze({ minimum: 21 })
  return age >= minimum;
};
```

impure 부분에서는 chekcAge 함수가 mutable 한 변수인 minium에 의존하여 값을 결정한다.
it depends on system state which is disappointing because it increases the cognitive load by introducing an external environment.
위 예제에서는 많지 않아 보일 수 있지만, mutable한 변수에 의존도는 시스템 복잡성에 가장 큰 영향을 미치는 요인중 하나.
외부 입력에 따라 다른 결과를 반환 한다.

## 사이드 이펙트

`사이드 이펙트`는 예상하는 기대값 이외의 발생하는 모든 효과를 말합니다.

- changing the file system
- inserting a record into a database
- making an http call
- mutations
- printing to the screen / logging
- obtaining user input
- querying the DOM
- accessing system state

함수 외부에서의 상호작용은 모두 사이드 이펙트 입니다.
위와 같은 사이드 이펙트들이 없는 프로그래밍의 실용성을 의심하게 되는게 사실입니다. 하지만,
함수형 프로그래밍의 철학은 사이드 이펙트들이 잘못된 동작의 주요 원인이라고 가정합니다.

위 의 사항들을 사용하지 않는것이 아닌, 통제된 방식으로 컨트롤 가능하도록 실행하기를 원합니다.

## The Case for Purity

### Cacheable (캐싱)

### Portable / Self-documenting (이식성, 주입(의존성), 자체 문서화)

순수 함수는 완전히 자급자족 합니다. 우선 함수의 의존성(종속성)은 명확합니다. 따라서 보다 쉽게 보고 이해할 수 있습니다.

```js
// impure
const signUp = (attrs) => {
  const user = saveUser(attrs);
  welcomeUser(user);
};

//pure
const signUp = (Db, Email, attrs) => () => {
  const user = saveUser(Db, attrs);
  welcomeUser(Email, user);
};
```

### Testable (테스팅)

### Reasonable (referential transparency)

순수 기능으로 작업할 때 가장 큰 승리는  referential transparency(참조 투명성) 이라고 보는 시각이 많다. 프로그램의 동작을 변경하지 않고 평가된 값을 대체할 수 있는 코드 스폿은 참조적으로 투명합니다. 순수함수는 사이드 이펙트가 없기 때문에 출력값을 통해서만 프로그램의 동작에 영향을 줄 수 있습니다.
또한 출력 값은 입력 값만 사용하여 신뢰성 있게 계산할 수 있으므로 순수 함수는 항상 참조 투명도를 유지합니다.
코드에 대해 추론하는 이 기능은 일반적으로 코드를 리팩터링하고 이해하는데 매우 유용합니다.

### Parallel Code

공유 메모리에 액세스할 필요가 없고, 사이드 이펙트로 인해 경쟁 상태를 가질 수 없기 때문에 우리는 어떤 순수 함수라도 병렬로 실행할 수 있습니다. 이는 스레드가 있는 서버쪽 JS 환경뿐만 아니라 웹 작업자가 있는 브라우저 에서도 매우 가능하지만, 현재 문화는 회피하는 것으로 보입니다.
