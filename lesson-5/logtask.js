let allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'Hello', 4, 5, 'world', 6, 7, 8],
noNumbers = ['здесь', 'нет', 'чисел'];

function isNumber(val) {
  return typeof val === 'number';
};

// function isSomeTrue(arr, func) {
//   return arr.some(function(item){
//     if (func(item)) {
//       return true;
//     } else false;
//   });
// };

function isSomeTrue(arr, func) {
   if (!func(arr[i++])){
     
       if (i < arr.length) {
          return isSomeTrue(arr,func);  
       } else {
         i = 0;
         return false;
       }
   } else {
      i = 0;
     return true;
   };
};

let i = 0;
console.log(isSomeTrue(allNumbers, isNumber)); //вернет true

console.log(isSomeTrue(someNumbers, isNumber)); //вернет true

console.log(isSomeTrue(noNumbers, isNumber)); //вернет false
