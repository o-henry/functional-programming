/**
 * For loop
 * 아래 두 함수는 기능적으로 유사하다.
 * 함수이름이 기능을 서술하는 이름으로 되어있다.
 *
 * 함수 바디에서 사용되는 food 나 dish는 암시적 인자다.
 * 두 변수는 같은 함수 이나 이름이 다르다.
 * 제네릭한 이름으로 변경한다.
 *
 */

let foods = ["Buger", "Strawberry", "Milk", "Rice"];

// function cookAndEatFoods() {
function cookAndEatArray(array) {
  //   for (let i = 0; i < foods.length; i++) {
  for (let i = 0; i < array.length; i++) {
    // let food = foods[i];
    let item = array[i];
    // cook(food);
    // eat(food);
    cookAndEat(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

cookAndEatFoods(foods);

let dishes = ["Plate", "Tray"];

// function cleanDishes() {
function cleanArray(array) {
  //   for (let i = 0; i < dishes.length; i++) {
  for (let i = 0; i < array.length; i++) {
    // let dish = dishes[i];
    let item = array[i];
    // wash(dish);
    // dry(dish);
    // putAway(dish);
    clean(item);
  }
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

cleanDishes(dishes);

/* =======================
 *      REFACTORING
 * =======================
 * 0. 함수로 감싸기
 * 1. 암시적 인수 식별
 * 2. 명시적 인수 추가
 * 3. 함수 바디에서 새 인수 사용
 * 4. 호출 코드 업데이트
 * */

// rename to something generic
function operateOnArray(array, f) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    f(item);
  }
}

operateOnArray(foods, cookAndEat);
operateOnArray(dishes, clean);

function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    f(item);
  }
}

forEach(foods, cookAndEat);
