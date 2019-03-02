'use strict';

let money = prompt("Ваш бюджет на месяц? (руб.)", '30000');
let time = prompt("Введите дату в формате YYYY-MM-DD", '2019-03-01');


let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: null,
  timeData: time,
  saving: false
};

// for (let i = 0; i < 2; i++) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько обойдется? (руб.)', '');
//   if ((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && (a != '') && (b != '') && a.length < 50) {

//     appData.expenses[a] = b;
//   }
// }

// let i = 0;
// while (i < 2) {
//   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
//       b = prompt('Во сколько обойдется? (руб.)', '');
//   if ((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && (a != '') && (b != '') && a.length < 50) {

//     appData.expenses[a] = b;
//   }
//   i++;
// }

let i = 0;
do {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется? (руб.)', '');
  if ((typeof(a) === 'string') && (typeof(a) != null) && (typeof(b) != null) && (a != '') && (b != '') && a.length < 50) {

    appData.expenses[a] = b;
  }
  i++;
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

console.log(appData);

if (appData.moneyPerDay < 100){
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000){
  console.log("Высокий уровень достатка");
} else
  console.log("Произошла ошибка");