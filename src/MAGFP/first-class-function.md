## 함수는 일급객체 이다.

함수를 다른 데이터 타입 처럼 다룰수 있고, 함수 매개변수로 전달할 수도 있고, 할당도 할 수 있는 특징.

유지보수의 장점

---

```js
httpGet("/post/2", (json) => renderPost(json));

// error처리를 위해 err를 명시적으로 넘겨주기
// 유지보수를 위한 함수 변경
httpGet("/post/2", (json, err) => renderPost(json, err));

// 일급함수
httpGet("/post/2", renderPost);
```

### 비슷한 코드를 다시 제작하는 경우가 많은데 이는, 이름과 참조하는 매개변수와 연관이 깊다.

```ts
// specific to our current blog
// 특정한 이름을 사용하는 경우, 특정한 데이터에 묶이게 되며, 재사용성을 해친다.
const validArticles = (articles) =>
  articles.filter((article) => article !== null && article !== undefined);

// vastly more relevant for future projects
const compact = (xs) => xs.filter((x) => x !== null && x !== undefined);
```
