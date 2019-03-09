//Напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры
function formateDate(date) {
  return formateNum(date.getHours()) + ":"
+ formateNum(date.getMinutes()) + ":" + formateNum(date.getMinutes()) + " " 
+ formateNum(date.getDate()) + "." + formateNum(date.getMonth()) + "." + date.getFullYear();
}

//Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
function formateNum(num) {
  let str = num.toString();
  if (str.length < 2) {
    return "0" + str;
  } else return str;
}

// 3) Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
function nowDay(){;
  let date = new Date(),
  day = "";
  switch (date.getDay()) {
    case 0:{
      day = "Воскресенье";
      break;
    };
    case 1:{
      day = "Понедельник";
      break;
    };
    case 2:{
      day = "Вторник";
      break;
    };
    case 3:{
      day = "Среда";
      break;
    };
    case 4:{
      day = "Четверг";
      break;
    };
    case 5:{
      day = "Пятница";
      break;
    };
    default:{
      day = "Суббота";
      break;
    }
  }
  let div = document.createElement('div'),
      text = document.createTextNode(day);
  div.appendChild(text);
  document.body.appendChild(div);  
}

//Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
function getDiffDates(start, finish, res) {
  console.log(start);
   res = (finish.valueOf() - start.valueOf())/(1000*3600*24);
} 

let output = document.createElement('div');
document.body.appendChild(output);
let date = new Date();

let text = document.createTextNode(formateDate(date));
output.appendChild(text);

nowDay();

let start = document.getElementById('start'),
    finish = document.getElementById('finish'),
    res = document.getElementById('res'),
    btn = document.getElementsByTagName('button')[0];

    btn.addEventListener('click', getDiffDates(start, finish, res));
    