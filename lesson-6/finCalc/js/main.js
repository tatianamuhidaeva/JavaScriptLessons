'use strict';

let startBtn = document.getElementById('start'),
    
    budVal = document.getElementsByClassName('budget-value')[0],
    dayBudVal = document.getElementsByClassName('daybudget-value')[0],
    levelVal = document.getElementsByClassName('level-value')[0],
    expVal = document.getElementsByClassName('expenses-value')[0],
    optExpVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSaveVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSaveVal = document.getElementsByClassName('yearsavings-value')[0],
    
    expItems = document.getElementsByClassName('expenses-item'),

    expItemBtn = document.getElementsByTagName('button')[0],
    expOptItemBtn = document.getElementsByTagName('button')[1],
    countBudBtn = document.getElementsByTagName('button')[2],

    optExpItems = document.querySelectorAll('.optionalexpenses-item'),
    
    incomeItem = document.getElementById('income'),
    checkSavings = document.getElementById('savings'),
    saveSum = document.getElementById('sum'),
    savePercent = document.getElementById('percent'),

    yearVal = document.getElementsByClassName('year-value')[0],
    monthVal = document.getElementsByClassName('month-value')[0],
    dayVal = document.getElementsByClassName('day-value')[0];

let money, time;

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

if (appData.budget == undefined){
  expItemBtn.disabled = true; 
  expOptItemBtn.disabled = true;
  countBudBtn.disabled = true;
}

startBtn.addEventListener('click', function(){
  money = +prompt("Ваш бюджет на месяц? (руб.)", '');
  time = prompt("Введите дату в формате YYYY-MM-DD", '2019-03-01');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц? (руб.)", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budVal.textContent = money.toFixed();
  yearVal.value =  new Date(Date.parse(time)).getFullYear();
  monthVal.value =  new Date(Date.parse(time)).getMonth() + 1;
  dayVal.value =  new Date(Date.parse(time)).getDate();

  if (appData.budget != undefined){
    countBudBtn.disabled = false;
  }
});
for (let i = 1; i < expItems.length; i +=2) {
  expItems[i].addEventListener('keydown', function(e){
    console.log(e.key + "  " +  e.keyCode);
    if ((e.keyCode > 31 && e.keyCode < 37)  || (e.keyCode > 40 && e.keyCode < 48)  || e.keyCode > 57) {
      e.preventDefault();
    }
  });
}
for (let i = 0; i < expItems.length; i++) {
  expItems[i].addEventListener('input', function(){
    let flag = true;
    for (let j = 1; j < expItems.length; j += 2) {
      if (expItems[j].value != ""){
        flag = false;
      }
    }
    expItemBtn.disabled = flag;
  });
}

expItemBtn.addEventListener('click', function(){
  let sum = 0;
  for (let i = 0; i < expItems.length; i++) {
    let a = expItems[i].value,
      b = expItems[++i].value;
    if ((typeof (b) != null) && (b != '')) {
      if ((typeof (a) === 'string') && (typeof (a) != null) && (a != '') && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        appData.expenses["Обязательная статья расходов"] = b;
      }
      sum += +b;
    }
  }
  expVal.textContent = sum;
});

for (let i = 0; i < optExpItems.length; i ++) {

  optExpItems[i].addEventListener('keydown', function(e){
    if ((e.keyCode > 40 && e.key < "Ё")  || e.key > "ё") {
      e.preventDefault();
    }
  });
  optExpItems[i].addEventListener('input', function() {
    // console.log(e.data.charCodeAt(0));
      let flag = true;
      for (let j = 0; j < optExpItems.length; j ++) {
        if (optExpItems[j].value != ""){
          flag = false;
        }
      }
      expOptItemBtn.disabled = flag;
  });
}

expOptItemBtn.addEventListener('click', function(){
  optExpVal.textContent = "";
  for (let i = 0; i < optExpItems.length; i++) {
    let a = optExpItems[i].value;
    if ((typeof (a) === 'string') && (typeof (a) != null) && (a != '') && a.length < 50) {
      appData.optionalExpenses[i+1] = a;
      optExpVal.textContent += appData.optionalExpenses[i+1] + ' ';
    }
  }
});

countBudBtn.addEventListener('click', function(){
  if (appData.budget != undefined){
    appData.moneyPerDay = ((appData.budget - (+expVal.textContent))/ 30).toFixed(2);    
    dayBudVal.textContent = appData.moneyPerDay;


    if (appData.moneyPerDay < 100) {
      levelVal.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
      levelVal.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
      levelVal.textContent = "Высокий уровень достатка";
    } else
      levelVal.textContent = "Произошла ошибка";
  } else {
    dayBudVal.textContent = "Произошла ошибка";
  }
});


incomeItem.addEventListener('input', function(){
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeVal.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

saveSum.addEventListener('input', function(){
  if (appData.savings == true) {
    let sum = +saveSum.value,
        percent = +savePercent.value;

      appData.monthIncome = sum * percent / 12 / 100;
      appData.yearIncome = sum * percent / 100;

      monthSaveVal.textContent = appData.monthIncome.toFixed(2);
      yearSaveVal.textContent = appData.yearIncome.toFixed(2);
  }
});

savePercent.addEventListener('input', function(){
  if (appData.savings == true) {
    let sum = +saveSum.value,
        percent = +savePercent.value;

      appData.monthIncome = sum * percent / 12 / 100;
      appData.yearIncome = sum * percent / 100;

      monthSaveVal.textContent = appData.monthIncome.toFixed(2);
      yearSaveVal.textContent = appData.yearIncome.toFixed(2);
  }
});


