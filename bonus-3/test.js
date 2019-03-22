function sayName(name){
  let message = "My name is" + name;
  return message;
}

let arr = [3, 4,34,-4,0.4,3];
let result = arr.reduce(function(sum,elem){
  return sum+elem;
})

let assert = require('chai').assert;

describe("sayName", function(){
  it("Получаем файл с новым именем", function(){
    assert.typeOf(sayName("Alex"), 'string');
  });
});
describe("arr", function(){
  it("Получаем сумму чмсел", function(){
    assert.equal(result, 40.4);
  })
})