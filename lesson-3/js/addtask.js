'use strict';

// Задание 1
let str = 'урок-3-был слишком легким';

str = str[0].toUpperCase() + str.slice(1);


// Задание 2
let pos = -1;
while ((pos = str.indexOf('-', pos + 1)) != -1) {
  str = str.substring(0, pos) + " " + str.slice(pos + 1);
}

console.log(str);

// Задание 3
let substr = 'легким';
pos = str.indexOf(substr);
if (~pos) {
  substr = str.slice(0, -2) + "o";
  str = str.substring(0, pos) + substr + str.slice(pos + substr.length + 1);
  console.log(str);
} else {
  console.log("Слово " + substr + " не найдено!");
}

/* Задание 4 
У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
Вывести в консоль квадратный корень из суммы кубов его элементов(Да, человека нужно исключить) * /
 */

let arr = [20, 33, 1, "Человек", 2, 3]
let sum = 0;
arr.forEach(element => {
  if (typeof(element) == "number") {
    sum += Math.pow(element, 3);
  }
});
console.log("Квадратный корень из суммы кубов: " + Math.sqrt(sum));

// Задание 5
function toTrimmerStr(str) {
  if (isNaN(+str) && (typeof(str) == "string") ) {
    str = str.trim();
    if (str.length > 50){
      str = str.substr(0, 50) + '...';
    }
    alert(str);
  } else {
    alert ("Аргументом функции toTrimmerStr() не является строка!");
  }
}
str = prompt("Введите произвольную строку");
toTrimmerStr(str);