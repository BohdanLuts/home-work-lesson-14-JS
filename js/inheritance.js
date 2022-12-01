// Реалізувати ієрархію:
// ПасажирськийТранспорт (PassengerTransport) =>ТранспортнийЗасіб (Vehicle)
// Вантажний Транспорт (FreightTransport) => ТранспортнийЗасіб (Vehicle).

// Для базового класу Vehicle реалізувати:

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    // - властивості:
    // --- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
    // --- brand - марка,
    // --- model - модель,
    // --- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }
  // - методи:
  // --- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
  getFullInfo() {
    return `Бренд: ${this.brand}, модель: ${
      this.model
    }, вік: ${this.getAge()} роки(-ів).`;
  }
  // --- getAge() - повертає кількість років із дня виробництва.
  getAge() {
    return new Date().getFullYear() - this.manufactureDate;
  }
}
const vehicle1 = new Vehicle("5000*2200*1800", "BMW", "X5", 2012);
console.log("vehicle1 :>> ", vehicle1);
console.log("getFullInfo() :>> ", vehicle1.getFullInfo());
console.log("getAge() :>> ", vehicle1.getAge());

// Дочірній клас PassengerTransport розширюється:
class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    // - властивостями:
    // --- passengerLimit - максимальна кількість пасажирських місць,
    // --- passengerCount - кількість зайнятих пасажирських місць,
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  // - методом addPassenger() для додавання ще одного пасажира з перевіркою можливості додавання (чи ще незайняті місця) - повертає true (якщо пасажир доданий) або false (якщо не доданий).
  addPassenger() {
    return this.passengerLimit > this.passengerCount;
  }
  // Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб:
  // бренд,
  // модель,
  // вік,
  // максимальна кількість пасажирських місць.
  getFullInfo() {
    return `Бренд: ${this.brand}, модель: ${
      this.model
    }, вік: ${this.getAge()} роки(-ів), MAX к-ть місць:${this.passengerLimit}.`;
  }
}
const passengerTransport1 = new PassengerTransport(
  "10000*3000*2500",
  "LAZ",
  "NewBus",
  2005,
  40,
  29
);
console.log("passengerTransport1 :>> ", passengerTransport1);
console.log("Наявність вільних місць :>> ", passengerTransport1.addPassenger());
console.log(
  "passengerTransport1.getFullInfo() :>> ",
  passengerTransport1.getFullInfo()
);

// Дочірній клас FreightTransport розширюється:
class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    // - властивістю:
    // --- capacity - вантажопідйомність,
    this.capacity = capacity;
  }
  // - методом checkLoadingPossibility(weight) - для перевірки можливості завантаження маси weight. Повертає булеан.
  checkLoadingPossibility(weight) {
    return this.capacity >= weight;
  }
  // Перевизначити метод getFullInfo:
  // бренд,
  // модель,
  // вік,
  // вантажопідйомність.
  getFullInfo() {
    return `Бренд: ${this.brand}, модель: ${
      this.model
    }, вік: ${this.getAge()} роки(-ів), вантажопідйомність ${
      this.capacity
    } кг.`;
  }
}
const freightTransport1 = new FreightTransport(
  "10000*3000*2500",
  "KAMAZ",
  "6533",
  1998,
  18000
);
console.log("freightTransport1 :>> ", freightTransport1);
console.log(
  "Можливість завантаження:>> ",
  freightTransport1.checkLoadingPossibility(40000)
);
console.log(
  "freightTransport1.getFullInfo() :>> ",
  freightTransport1.getFullInfo()
);

// Створити об'єкти всіх класів ієрархії, протестувати роботу методів.
