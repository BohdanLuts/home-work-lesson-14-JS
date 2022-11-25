// Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1, а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).

// Приклад використання:
const myCounter = customCounter1(5);
const result1 = myCounter(); // => 5
const result2 = myCounter(); // => 10
const result3 = myCounter(); // => 15

function customCounter1(stepValue) {
  let startValue = 0;
  return function () {
    return (startValue += stepValue);
  };
}
console.log("result1 =>", result1);
console.log("result2 =>", result2);
console.log("result3 =>", result3);

// Або:

// * Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).

// Приклад використання:
const myCounter2 = customCounter2(1, 5);
const result4 = myCounter2(); // => 6
const result5 = myCounter2(); // => 11
const result6 = myCounter2(); // => 16
function customCounter2(startValue, stepValue) {
  let value = startValue;
  let step = stepValue;
  return function () {
    return (value += step);
  };
}
console.log("result4 =>", result4);
console.log("result5 =>", result5);
console.log("result6 =>", result6);

// У ДЕБАГЕРІ відстежити змінні, які перебувають у Замиканні.
