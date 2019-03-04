'use strict';

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let currentDay = 'вс';

for (let i = 0; i < week.length; i++) {
  switch (week[i]) {
    case 'сб':
    case 'вс':
      if (week[i] == currentDay) {
        document.write('<p><strong><em>' + week[i] + '</em></strong></p>');
      } else {
        document.write('<p><strong>' + week[i] + '</strong></p>');
      };
      break;
    default:
      if (week[i] == currentDay) {
        document.write('<p><em>' + week[i] + '</em></p>');
      } else {
        document.write('<p>' + week[i] + '</p>');
      };
      break;
  }
};

let arr = ['34234', '748479', '90866789', '53656', '4256', '7245', '33333'];

for (let i = 0; i < arr.length; i++) {
  if ((arr[i].substr(0, 1) == 3) || (arr[i].substr(0, 1) == 7)) {
    console.log(arr[i]);
  }
}