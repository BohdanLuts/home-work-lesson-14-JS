// **JS. Switch Case

const dayOfWeek = Number(prompt("Введіть номер, що відповідає дню тижня:"));

switch (dayOfWeek) {
  case 1:
    console.log("Понеділок");
    break;
  case 2:
    console.log("Вівторок");
    break;
  case 3:
    console.log("Середа");
    break;
  case 4:
    console.log("Четвер");
    break;
  case 5:
    console.log("П`ятниця");
    break;
  case 6:
    console.log("Субота");
    break;
  case 7:
    console.log("Неділя");
    break;

  default:
    console.log("Введіть ПРАВИЛЬНИЙ номер! (В межах значення від 1 до 7):");
    break;
}

const day = Number(prompt("Введіть номер дня місяця:"));
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`${day} число місяця належить до I декади`);
    break;
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    console.log(`${day} число місяця належить до II декади`);
    break;
  case 21:
  case 22:
  case 23:
  case 24:
  case 25:
  case 26:
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
    console.log(`${day} число місяця належить до III декади`);
    break;

  default:
    console.log("Введіть число міцяця від 1 до 31:");
    break;
}
