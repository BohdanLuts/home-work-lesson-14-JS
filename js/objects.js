// 1. Створити об'єкт customer, що містить такі властивості:
// ім'я,
// прізвище,
// електронна адреса,
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ;

// методи:
// виведення адреси,
// зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
// Додати об'єкту властивість    (для позначення статі, true - male, false - female).
// Видалити у об'єкта властивість адреса.

// Зробити копії об'єкту customer двома різними способами.

const customer = {
  name: "Alex",
  lastName: "Sviridov",
  email: "sviridov@abc.com",
  password: "qwerty",
  phone: "0953332211",
  adress: {
    city: "Kyiv",
    street: "Gonchara",
    house: 8,
    flat: 7,
  },
  getFullAdress() {
    return `${customer.adress.city}, ${customer.adress.street} str., ${customer.adress.house}/${customer.adress.flat}`;
  },
  changePhone(newPhone) {
    return (this.phone = newPhone);
  },
};

console.log("customer", customer);
console.log(customer.getFullAdress());
customer.changePhone("123456789");
customer.isMale = true;
delete customer.adress;
console.log("customer after:", customer);

const customer2 = Object.assign({}, customer);
console.log("customer2", customer2);
console.log("customer === customer2", customer === customer2);

const customer3 = { ...customer };
console.log("customer3", customer3);
console.log("customer === customer3", customer === customer3);

// ------------------------------------------

// 2. Перебрати і вивести властивості об'єкту cat
// {    name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (const key in cat) {
  console.log(`cat.${key} = ${cat[key]}`);
}

// ------------------------------------------

// 3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор,
// назва,
// рік видання,
// видавництво (рядок або *об'єкт з властивостями місто, назва),
// ціна.
//    передбачити методи:
// для обчислення віку книги (у роках),
// для зміни ціни книги.

function Book(autor, bookName, year, publishinHouse, price) {
  this.autor = autor;
  this.bookName = bookName;
  this.year = year;
  this.publishinHouse = publishinHouse;
  this.price = price;
  this.getAge = function (today) {
    today = new Date().getFullYear();
    age = today - this.year;
    return `The "${this.bookName}" by ${this.autor} is ${age} year(s) old.`;
  };
  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
}

const book1 = new Book("Stephen King", "The Stand", 2008, "Anchor", 9.99);
console.log("book1", book1);
console.log("book1.getAge()", book1.getAge());
book1.changePrice(14.99);
console.log("book1 after::>>", book1);
