'use strict';

// Задание 1
let str1 = 'урок-3-был слишком легким';

str1 = str1[0].toUpperCase() + str1.slice(1);


// Задание 2
let str2 = str1;
let pos2 = -1;
while ((pos2 = str2.indexOf('-', pos2 + 1)) != -1) {
  str2 = str2.substring(0, pos2) + " " + str2.slice(pos2 + 1);
}

console.log(str2);

// Задание 3
let str3 = str2;
let substr3 = 'легким';
let pos3 = str3.indexOf(substr3);
if (~pos3) {
  substr3 = substr3.slice(0, -2) + "oо";
  str3 = str3.slice(0, pos3) + substr3 + str3.slice(pos3 + substr3.length + 1);
  console.log(str3);
} else {
  console.log("Слово " + substr3 + " не найдено!");
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
let str5 = prompt("Введите произвольную строку");
toTrimmerStr(str5);