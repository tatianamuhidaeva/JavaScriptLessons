let mass = [7,6,3,8,4,4,7,6,3,3];
let res = [];

function sortFrequency(mass){
  let obj = {}, // хранит значение порядкого номера числа, само число и количетсво его повторений. число:[частота,порядковый номер]
      mass2 = []; // вспомогательный
  let i = 0;
  let counter;

  while (mass.length > 0){
    current = mass[0];     
    let count = 0;
    //создадим массив без текущего элемента и посчитаем его повторение 
    mass2 = mass.filter(function(num){
      if (num == current) {
        count++;
      }
      return num != current;
    })
    //создадим свойство в obj с индексом-элементом и значением-частотой
    obj[current] = [count, ++i];
    mass = mass2;
  }
  console.log(obj);  
  // return mass;  
  
  /*вывод значений
    1) находим вручную максимальную частоту, так как нужно знать,есть ли равные максимуму    
    2) выводим число нужное кол-во раз, удаляем это значение из obj
  */
  do{
    let maxFreq = [0, 1], // частота . порядковый номер
        number = 0;
    for (let key in obj) {
      if (obj[key][0] > maxFreq[0]) {
        maxFreq[0] = obj[key][0];
        maxFreq[1] = obj[key][1];
        number = key;
      } else if (obj[key][0] == maxFreq[0]){
        if (obj[key][1] <  maxFreq[1]){
          maxFreq[1] = obj[key][1];
          number = key;
        }
      }
    }// нашли максимальную частоту. Выводим нужное кол-во раз.
    for (let j = 0; j < maxFreq[0]; j++){
      res.push(number);
    }
    delete obj[number];
    
    counter = 0;
    for (var key in obj) {
      counter++;
    }
  } while (counter != 0);
  // console.log(res);
  return res;
}

console.log( sortFrequency(mass));
