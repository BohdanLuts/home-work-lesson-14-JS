// 1.1 Для

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}
console.dir(users);

// прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести на прототип.

console.log("users[2].getFullName() =>", users[2].getFullName());
console.log("users[5].getFullName() =>", users[5].getFullName());
console.log("users[6].getFullName() =>", users[6].getFullName());
console.log("users[7].getFullName() =>", users[7].getFullName());
console.log("users[55].getFullName() =>", users[55].getFullName());

// 1.2 Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

function femalePupilsAge(pupil) {
  return pupil.age >= 6 && pupil.age <= 18 && !pupil.isMale;
}
const femaleInformation = users.filter(femalePupilsAge);

function fullNames(pupil) {
  return pupil.getFullName();
}
const femaleFullNames = femaleInformation.map(fullNames);
console.log(
  "Імена осіб жіночої статі шкільного віку (6 – 18 років) :>> ",
  femaleFullNames
);

// 1.3 Видалити з масиву користувача з email useremail5@gmail.com

function wrongUser(wrongEmail) {
  return wrongEmail.email === "useremail5@gmail.com";
}

const deleteUser = users.findIndex(wrongUser);
if (deleteUser === -1) {
  console.log(`Такого email не існує!`);
} else {
  users.splice(deleteUser, 1);
}
console.dir(users);

// 1.4 Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com

function featuredEmail(userEmail) {
  return userEmail.email === "useremail99@gmail.com";
}

users.findIndex(featuredEmail) === -1
  ? console.log("Користувач з заданим email не існує")
  : console.log("Користувач з заданим email існує");

// Варіант з .some

function featuredEmail2(userEmail) {
  return userEmail.email === "useremail99@gmail.com";
}

users.some(featuredEmail2)
  ? console.log("Користувач з заданим email існує")
  : console.log("Користувач з заданим email не існує");

// 1.5 Перевірити, чи всі користувачі підписані (subscribed).

function allSubscribed(check) {
  return check.isSubscribed;
}

const isSubscribed = users.every(allSubscribed)
  ? console.log("Всі користувачі підписані")
  : console.log("Не всі користувачі підписані");
