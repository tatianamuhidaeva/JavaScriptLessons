
describe("TEST", function(){

	it("Функция sum должна возвращать тип данных true", function(){
		assert.equal(sum(2,30), true);
	});
	it("Переменная num должна быть равна 5.", function(){
		assert.equal(num, 5);
	});

	it("Функция each должна возвращать тип данных array", function () {
		assert.typeOf(each(mass, myFunc), 'array');
	});
	it("Функция each должна возвращать 8, 7, 6, 5, 4", function () {
		assert.deepEqual(each(mass, myFunc), [ 8, 7, 6, 5, 4 ]);
	});
	it("Функция each должна возвращать массив длиной  5", function () {
		assert.equal(each(mass, myFunc).length, 5);
	});
});