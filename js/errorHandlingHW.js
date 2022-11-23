// Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

// Для спрощення замість рекурсивного алгоритму можна реалізувати повернення значення base**exponent, основу вважайте цілим числом, показник -- додатнім.

function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("Основа має бути числом");
  }
  if (!Number.isSafeInteger(base)) {
    throw new RangeError("Основа має бути цілим числом");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("Показник має бути числом");
  }
  if (exponent < 0 || !Number.isSafeInteger(exponent)) {
    throw new RangeError("Показник має бути цілим додатнім числом");
  }

  if (exponent === 0) return 1;
  return base * pow(base, exponent - 1);
}

try {
  console.log("pow(2, 4) =>", pow(2, 4));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Помилка", error);
  } else if (error instanceof RangeError) {
    console.log("Помилка", error);
  } else {
    console.log("Виникла помилка");
  }
}
