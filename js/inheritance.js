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
    this.manufactureDate = manufactureDate;
  }
  // - методи:
  // --- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
  getFullInfo() {
    return `Info: ${this.brand}, ${this.model}, ${this.getAge()}`;
  }
  // --- getAge() - повертає кількість років із дня виробництва.
  getAge() {
    return new Date().getFullYear() - this.manufactureDate.getFullYear();
  }
}
const vehicle1 = new Vehicle(
  { width: 2300, height: 1800, length: 4500 },
  "BMW",
  "X5",
  new Date(2012, 7, 25)
);
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
    ////////////////////////////
    passengerLimit, ///////////////
    passengerCount ///////////////
    /////////////////////////////
  ) {
    super(dimensions, brand, model, manufactureDate);
    // - властивостями:
    // --- passengerLimit - максимальна кількість пасажирських місць,
    // --- passengerCount - кількість зайнятих пасажирських місць,
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }
  set passengerCount(value) {
    if (typeof value !== "number") {
      throw new TypeError("passengerCount must be number");
    }
    if (value < 0 || value > this.passengerLimit || !Number.isInteger(value)) {
      throw new RangeError(`passengerLimit must max = ${this.passengerLimit}`);
    }
    this._passengerCount = value;
  }
  get passengerCount() {
    return this._passengerCount;
  }

  // - методом addPassenger() для додавання ще одного пасажира з перевіркою можливості додавання (чи ще незайняті місця) - повертає true (якщо пасажир доданий) або false (якщо не доданий).
  addPassenger() {
    if (this.passengerLimit > this.passengerCount) {
      this.passengerCount += 1;
      return true;
    }
    return false;
  }
  // Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб:
  // бренд,
  // модель,
  // вік,
  // максимальна кількість пасажирських місць.
  getFullInfo() {
    return `${super.getFullInfo()}, ${this.passengerLimit}`;
  }
}

const passengerTransport1 = new PassengerTransport(
  { width: 2500, height: 3000, length: 10000 },
  "LAZ",
  "NewBus",
  new Date(2005, 2, 22),
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
  set capacity(value) {
    if (typeof value !== "number") {
      throw new TypeError("capacity must be number");
    }
    if (value < 0 || !Number.isInteger(value)) {
      throw new RangeError(`capacity must be > 0`);
    }
    this._capacity = value;
  }
  get capacity() {
    return this._capacity;
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
    return `${super.getFullInfo()}, ${this.capacity}`;
  }
}
const freightTransport1 = new FreightTransport(
  { width: 500, height: 3500, length: 7000 },
  "KAMAZ",
  "6533",
  new Date(1998, 11, 11),
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
