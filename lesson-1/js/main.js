'use strict';

var money = prompt("Ваш бюджет на месяц? (руб.)", '30000');
var time = prompt("Введите дату в формате YYYY-MM-DD", '2019-03-01');

var expenses = [
  {
    name: '',
    sum: 0
  },
  {
    name: '',
    sum: 0
  }
]

expenses[0].name = prompt('Введите обязательную статью расходов в этом месяце', 'Питание');
expenses[0].sum = prompt('Во сколько обойдется? (руб.)', '3000');
expenses[1].name = prompt('Введите обязательную статью расходов в этом месяце', 'Одежда');
expenses[1].sum = prompt('Во сколько обойдется? (руб.)', '2000');

var appData = {
  money: money,
  timeData: time,
  expenses: expenses,
  income: null,
  saving: false
};


console.log(money);
console.log(time);
console.log(appData.expenses[0]);
console.log(appData.expenses[1]);
console.log(appData);

console.log(appData.money);

let sum = parseInt(appData.expenses[0].sum) + parseInt(appData.expenses[1].sum);

  console.log(sum);


let freeMoney = money - sum;

alert ('Свободных денег на 1 день: ' + freeMoney / 30 + ' рублей');
