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

  let a1 = prompt('Введите обязательную статью расходов в этом месяце', 'food'),
      a2 = prompt('Во сколько обойдется? (руб.)', '3000'),
      a3 = prompt('Введите обязательную статью расходов в этом месяце', 'clouse'),
      a4 = prompt('Во сколько обойдется? (руб.)', '2000');

  appData.expenses.a1 = a2;
  appData.expenses.a3 = a4;

  alert (appData.budget / 30);
