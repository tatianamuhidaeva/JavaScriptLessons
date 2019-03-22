function findPoly(str) {
  // console.log('typeof str = ' + typeof str);
  if (str == ''){
    return "Введите строку";
  } else {
    let poly = "",
    i = 0;
    while (Math.trunc(poly.length/2) <= str.length - i) {
      let j  = 0;
      while (str.substring(i-j, i+1) == str.substring(i, i+j+1).split('').reverse().join('')) {
        if (poly.length < str.substring(i-j, i+j+1).length) {
          poly = str.substring(i-j, i+j+1);
        }
        j++;
      }

      j = 0;
      while (str.substring(i-j, i+1) == str.substring(i+1, i+j+2).split('').reverse().join('')) {
        if (poly.length < str.substring(i-j, i+j+2).length) {
          poly = str.substring(i-j, i+j+2);
        }
        j++;
      }
      i++;
    }
    return poly;
  }
}



// console.log(findPoly('абвгоогвфф'));
// console.log(findPoly('fffkffgffkfdk'));
console.log(findPoly('f'));
