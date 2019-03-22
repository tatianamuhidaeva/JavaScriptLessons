let assert = require('chai').assert;
// // Функция sum должна возвращать тип данных true. Проверить её на это.

// function sum(a, b) {
// 	return a + b > 10;
// }
// sum(2,2);




// // Переменная num должна быть равна 5. Проверить на соответствие.

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// let num = arr[1][1];

// describe("TEST", function(){

// 	it("Функция sum должна возвращать тип данных true", function(){
// 		assert.equal(sum(2,30), true);
// 	});
// 	it("Переменная num должна быть равна 5.", function(){
// 		assert.equal(num, 5);
// 	});
// });

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function (startArr, f) {
	return f(startArr)
};
var arr = [64, 49, 36, 25, 16];
var myFunc = function (a) {
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i] = Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr, myFunc));

describe("TEST EACH", function () {

	it("Функция each должна возвращать тип данных array", function () {
		assert.typeOf(each(arr, myFunc), 'array');
	});
	it("Функция each должна возвращать 8, 7, 6, 5, 4", function () {
		assert.deepEqual(each(arr, myFunc), [ 8, 7, 6, 5, 4 ]);
	});
	it("Функция each должна возвращать массив длиной  5", function () {
		assert.equal(each(arr, myFunc).length, 5);
	});
});