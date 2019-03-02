'use strict';

let num = 33721;

let pow = eval(num.toString().split('').join('*'));
console.log(pow);
pow *= pow * pow;

alert(pow.toString().substr(0, 2));