/**
 * hi가 벌써 하나의 인자를 받는 함수인데 왜 굳이 같은 인자로 hi를 호출하기만 하는 함수로 감싸나요? 전혀 쓸모가 없군요.
 * 이건 함수를 다른 함수로 감싸 단순히 계산을 느리게 하고 코드를 장황하게 하는 안좋은 방법입니다
 */

const hi = (name) => `Hi ${name}`; // fn
const greeting = (name) => hi(name); // `Hi name`
const greeting = hi;
greeting("times"); // 'Hi times'

// 무식한 방법
const getServerStuff = (callback) => ajaxCall((json) => callback(json));
// 똑똑한 방법
const getServerStuff = ajaxCall;
