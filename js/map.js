// Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
// Створіть колекцію Map з цього масиву.
const task = new Map();
task.set("1", "first");
task.set("3", "third");
/* or
const task = new Map([
  [1, "first"],
  [3, "third"],
]);
*/
console.log("task", task);

// Отримайте список ключів та значень окремо.
console.log("task.keys() =>", task.keys());
const allKeys = [...task.keys()];
console.log("All keys of task in array=>", allKeys);

console.log("task.values() =>", task.values());
const allValues = [...task.values()];
console.log("All values of task in array=>", allValues);

// Отримайте кількість елементів.
console.log("task.size =>", task.size);

// Додати та видалити елемент
task.set("2", "second").set("4", "fourth");
console.log("task", task);

task.delete("3");
console.log("task", task);

// Здійсніть пошук за ключом
function searchByKey(key) {
  return task.has(key)
    ? `Ключ ${key} icнує => ${task.get(key)}`
    : `Ключ ${key} не icнує`;
}
console.log("searchByKey(key) = ", searchByKey("1"));
