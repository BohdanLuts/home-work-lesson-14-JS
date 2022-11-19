// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("numberArray", numberArray);

// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
console.log("numberArray", numberArray.pop());
console.log("numberArray", numberArray);
console.log("numberArray", numberArray.shift());
console.log("numberArray", numberArray);
console.log("numberArray", numberArray.push(0));
console.log("numberArray", numberArray);
console.log("numberArray", numberArray.unshift(17));
console.log("numberArray", numberArray);

// 2 Вивести розмір масиву.
console.log("numberArray.length", numberArray.length);

// 3 Зробити копію масиву.
const numberArray1 = Array.from(numberArray);
console.log("numberArray1", numberArray1);
console.log("numberArray1 === numberArray", numberArray1 === numberArray);
const numberArray2 = [...numberArray];
console.log("numberArray2", numberArray2);
console.log("numberArray2 === numberArray", numberArray2 === numberArray);

// Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли

// 4 Вивести елементи з парними індексами.
function evenIndex(array) {
  for (let i = 0; i < array.length; i += 2) {
    console.log(`array[${i}] = ${array[i]}`);
  }
}
console.log(evenIndex(numberArray));

// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
function evenNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log(`array[${i}] = ${array[i]}`);
    }
  }
}
console.log(evenNumbers(numberArray));

// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).
function zeroNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log(`array[${i}] = ${array[i]}`);
    }
  }
}
console.log(zeroNumbers(numberArray));

// 7 Підрахувати кількість нульових елементів.

function haveZeroNumbers(array) {
  let zeros = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeros++;
    }
  }
  return zeros;
}
console.log(
  `В массиві ${haveZeroNumbers(numberArray)} елемент(-ів) зі значенням === 0`
);

// // Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).

// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
const arrayOriginal = [-1, 5, 0, 9, -10];
console.log("arrayOriginal", arrayOriginal);

function isNotZero(notZero) {
  return notZero !== 0;
}
const arrayResult = arrayOriginal.filter(isNotZero);
console.log("arrayResult", arrayResult);

// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
const arrayOriginal1 = [99, 5, 0, 9, 30, 10];
console.log("arrayOriginal1", arrayOriginal1);

function divided100(num) {
  return num / 100;
}

const arrayResult1 = arrayOriginal1.map(divided100);
console.log("arrayResult1", arrayResult1);

// 10 Вивести елементи масиву, зведені у куб.
function cubeNumber(num) {
  console.log("num**3", num ** 3);
}

arrayOriginal1.forEach(cubeNumber);

// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
console.log("arrayOriginal1", arrayOriginal1);
function findIn(item) {
  return item ** 2 === 100;
}

const numIndex = arrayOriginal1.findIndex(findIn);
console.log("numIndex", numIndex);
if (numIndex === -1) {
  console.log("Такого елементу не існує");
} else {
  console.log(arrayOriginal1.splice(numIndex, 1));
}
console.log("arrayOriginal1", arrayOriginal1);

// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
console.log("arrayOriginal1", arrayOriginal1);

function isAllEven(num) {
  return num % 2 !== 0;
}

if (arrayOriginal1.some(isAllEven)) {
  console.log("НЕ всі елементи масиву є парними числами");
} else {
  console.log("ВСІ елементи масиву є парними числами");
}

// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
console.log("arrayOriginal1", arrayOriginal1);

function isNegative(num) {
  return num >= 0;
}

if (arrayOriginal1.every(isNegative)) {
  console.log("Всі елементи массиву більше 0");
} else {
  console.log("У массиві присутній від'ємний елемент");
}
