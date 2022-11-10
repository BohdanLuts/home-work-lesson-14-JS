// JS. Functions

// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65). Функція приймає в якості параметра вік людини і повертає значення булевського типу.
// Очікуваний результат:
// isWorkingAgePerson(20); // true
// isWorkingAgePerson(4); // false
// isWorkingAgePerson(88); // false

function isWorkingAgePerson(age) {
  return age > 16 && age < 65;
}
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));

// 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).

function isSimple(num) {
  let isSimpleNumber = num > 1;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isSimpleNumber = false;
      break;
    }
  }

  return isSimpleNumber;
}

console.log("isSimple(1)", isSimple(1));
console.log("isSimple(2)", isSimple(2));
console.log("isSimple(3)", isSimple(3));
console.log("isSimple(4)", isSimple(4));
console.log("isSimple(5)", isSimple(5));
console.log("isSimple(6)", isSimple(6));
console.log("isSimple(7)", isSimple(7));
console.log("isSimple(8)", isSimple(8));
console.log("isSimple(9)", isSimple(9));
console.log("isSimple(10)", isSimple(10));

// 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false

/**
 * Returns boolean value when dividing two numbers without a remainder
 * @param {number} first - Dividend
 * @param {number} last - Divider
 * @returns {number} boolean value when dividing without a remainder of a divisible number by a divisor
 */
function checkMultiplicity(first, last) {
  result = first % last;
  return result === 0;
}
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

// function expression
const newCheckMultiplicity = function (first, last) {
  return first % last === 0;
};
console.log(newCheckMultiplicity(25, 5));
console.log(newCheckMultiplicity(15, 3));
console.log(newCheckMultiplicity(15, 5));
console.log(newCheckMultiplicity(15, 4));

// 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).

const a = Number(prompt("Введіть довжину першої сторони трикутника"));
const b = Number(prompt("Введіть довжину другої сторони трикутника"));
const c = Number(prompt("Введіть довжину третьої сторони трикутника"));

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

if (isTriangle(a, b, c)) {
  alert("Трикутник існує");
} else {
  alert("Трикутник не існує");
}

console.log(isTriangle(a, b, c));

// 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

/**
 * Returns area of a cuboid
 * @param {number} a - Heght of the cuboid
 * @param {number} b - Width of the cuboid
 * @param {number} c - Length of the cuboid
 * @returns {number} double sum of the products of height and width, products of width and length, products of height and length
 */
const parallelepipedArea = function (a, b, c) {
  return 2 * (a * b + b * c + a * c);
};
console.log(
  "Площа паралелепіпеда становить ",
  parallelepipedArea(2, 5, 7),
  "умовних одиниць"
);
