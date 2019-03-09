'use strict';

let money, time;


function start() {
  money = +prompt("Ваш бюджет на месяц? (руб.)", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '2019-03-01');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц? (руб.)", '');
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: null,
  timeData: time,
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
      b = prompt('Во сколько обойдется? (руб.)', '');
    if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && a.length < 50) {

      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}

chooseExpenses();


function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let a = prompt('Статья необязательных расходов?', '');
    if ((typeof (a) === 'string') && (typeof (a) != null) && (a != '') && a.length < 50) {
      appData.optionalExpenses[i+1] = a;
    } else {
      appData.optionalExpenses[i+1] = "Необязательная статья расходов";
    }
  }
}

chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(2);
  
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
  } else
    console.log("Произошла ошибка");
}

detectLevel();

console.log(appData);

function checkSavings() {
  if (appData.savings) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?", 10);

    appData.monthIncome = save * percent / 12 / 100;
    alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
  }
}

checkSavings();
