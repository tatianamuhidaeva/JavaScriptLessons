// import {sum, num} from './script';
const obj = require('./script');

test('Функция sum должна возвращать тип данных true', () => {
  expect(obj.sum(1, 20)).toBe(true);
});

test("Переменная num должна быть равна 5.", function(){
  expect(obj.num).toBe(5);
});
test("Функция each должна возвращать тип данных array", function(){
  expect(Array.isArray(obj.each(obj.mass, obj.myFunc))).toBe(true);
});
test("Функция each должна возвращать 8, 7, 6, 5, 4", function(){
  expect(obj.each(obj.mass, obj.myFunc)).toEqual([ 8, 7, 6, 5, 4 ]);
});
test("Функция each должна возвращать массив длиной  5", function(){
  expect(obj.each(obj.mass, obj.myFunc)).toHaveLength(5);
});
