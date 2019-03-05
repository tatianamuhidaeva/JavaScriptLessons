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
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function(){
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется? (руб.)', '');
      if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) && (a != '') && (b != '') && a.length < 50) {
  
        appData.expenses[a] = b;
      } else {
        i--;
      }
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let a = prompt('Статья необязательных расходов?', '');
      if ((typeof (a) === 'string') && (typeof (a) != null) && (a != '') && a.length < 50) {
        appData.optionalExpenses[i+1] = a;
      } else {
        appData.optionalExpenses[i+1] = "Необязательная статья расходов";
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);    
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Высокий уровень достатка");
    } else
      console.log("Произошла ошибка");
  },
  checkSavings: function() {
    if (appData.savings) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?", 10);
  
      appData.monthIncome = save * percent / 12 / 100;
      alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed(2));
    }
  },
  chooseIncome: function() {
    let mass;
    let bool = false;
    
    while (!bool) {
      let items = prompt ("Что принесет дополнительный доход? (Перечслите через запятую)", "");
      if ((typeof (items) === 'string') && (typeof (items) != null) && (items != '')) {
        mass = items.split(", ");
        mass.forEach(element => {
          if ((typeof (element) === 'string') && (element != '')) {
            console.log(element);
            appData.income.push(element.trim());
            bool = true;
          } else {
            console.log("в строке был пустой или не строковый объект!");
          }
        });
      } else {
        alert("Пожалуйста, введите данные!");
      };
      if (bool) {
        bool = !confirm('Может что-то еще? (нажмите OK, если нужно вернуться и Cansel для отмены)');
      }
    }
    appData.income.sort();

    console.log("Способы доп. заработка: ");
    let i = 1;
    appData.income.forEach(element => {
      console.log(i + "-й Способ заработка: " + element);
      i++;
    });
  }
};

console.log("");
console.log("Наша программа включает в себя данные: ");
for (let key in appData){
  console.log("Название ключа: " + key + ". Содержимое: " + appData[key]);
}

