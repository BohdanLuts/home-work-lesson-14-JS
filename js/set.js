// Створіть колекцію Set із початковими значеннями 1, 2, 3.
const set = new Set();
set.add(1).add(2).add(3);
console.log("set :>> ", set);

// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4.
console.log("set.has(3) :>> ", set.has(3));
console.log("set.has(4) :>> ", set.has(4));

// Додати ще кілька елементів.
set.add(4).add(5).add(6);
console.log("set :>> ", set);

// За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
for (const element of set) {
  console.log("element :>> ", element);
}
// Знайдіть суму цих значень.
const initialValue = 0;
const sumValues = [...set.values()].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log("Сумма значень :>> ", sumValues);

// Видаліть елемент 2.
set.delete(2);
console.log("set :>> ", set);

// Очистіть усю колекцію.
set.clear();
console.log("set :>> ", set);

// З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const array1 = [1, 6, 9, 4, 9, 1, 5, 6];
const uniqValues = [...new Set(array1)];
console.log("uniqValues :>> ", uniqValues);

// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const array2 = [1, 6, 9, 4, 9, 1, 5, 6];
const array3 = [5, 10, 11];
const unitedArrValues = [...new Set([...array2, ...array3])];
console.log("unitedArrValues :>> ", unitedArrValues);

// * З масиву
const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];

// створити
// 1) масив імен користувачів
const names = [...new Set(messages.map((item) => item.name))];
console.log("names :>> ", names);
