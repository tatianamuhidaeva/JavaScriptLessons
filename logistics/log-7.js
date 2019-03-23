
let mass = [[1,2,3],["a","b","c"]];
let massNew = [];
for (let i = 0; i < mass[0].length; i++){
  massNew.push([]);
}
let trans = mass => mass.map((str,i) => str.map((item,j) => massNew[j][i] = item));
trans(mass);
console.log(massNew);


