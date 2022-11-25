// 1. Реалізувати клас Phone (таска з заняття).
// Властивості: марка, модель, колір, ціна, рік випуску.
// Метод: розрахунок віку телефона.

class Phone {
  constructor(brand, model, color, price, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("Введіть рік цифрами");
    }
    if (
      value > new Date().getFullYear() ||
      value < 0 ||
      !Number.isInteger(value)
    ) {
      throw new RangeError("Введіть правильний рік");
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
  getPhoneAge() {
    return new Date().getFullYear() - this.year;
  }
}

// Створити екземпляр класу, викликати для нього метод.
try {
  const telephone = new Phone("Iphone", "13", "Green", 800, 2021);
  console.log("telephone =>", telephone);
  console.log(`Age of the phone ${telephone.getPhoneAge()} year(s)`);
  telephone.year = 2021;
  console.log(`Age of the phone ${telephone.getPhoneAge()} year(s)`);
} catch (error) {
  console.log("Помилка", error);
}

console.log("Some text if we have Error");

// Реалізувати сеттер для року виробництва з валідацією та відповідний геттер.
