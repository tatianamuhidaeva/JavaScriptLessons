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

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется? (руб.)', '');
  // if ((typeof(a) === 'string') && (typeof(a) != null)) {

  // }
  appData.expenses[a] = b;
}

console.log(appData);
alert(appData.budget / 30);