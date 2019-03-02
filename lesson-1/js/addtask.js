var num = 33721;

pow = eval(num.toString().split('').join('*'));
console.log(pow);
pow *= pow * pow;

alert(pow.toString().split('')[0] + pow.toString().split('')[1]);