// Проверяем себя, если не понимаем почему так а не иначе пишем в чат или в ЛС, желательно объяснять почему то или иное решение

// Типы данных

// console.log([1, 2, 3] + ' is the answer.'); // '1,2,3 is the answer.'
// console.log(false || true * 2); // '2'
// console.log({ valueOf: () => 42 } * 2); // 84
// console.log(parseInt('7.5') + parseFloat('2.5')); // 9.5
// console.log(!!'Hello' - 1); // 0
// console.log(new String('hello') instanceof Object); // true
// console.log((true ^ false) === (false ^ true)); // true
// console.log(true && '5' + 5); // '55'
// console.log({ valueOf: () => '10', toString: () => '20' } + 5); // ? '105'
// console.log((5).toString() === '5'); // true
// console.log(null || false || undefined); // undefined
// console.log(0 || 2 || NaN); // 2
// console.log(1 && null && 2); // ? null
//
//
//
// function xy() {}
//
// console.log(typeof xy); // function
// console.log(xy instanceof Object); // true
//
// var str1 = String(123);
// var str2 = new String(123);
//
// console.log(typeof str1 === typeof str2); // false
// console.log(str1 === str2); // false
// console.log(str1 === String(123)); // true
// console.log(str2 === new String(123)); // false
// console.log(str1 === 123); //? false
// console.log(str1 === '123'); //? true
// console.log(str1 == str2); //? true
// console.log(str1 == 123); //? true
// console.log(str1 == '123'); //? true
//
// var arr = [];
// console.log(typeof arr); // object
//
// var str3 = '123';
// str3[0] = '2';
// console.log(str3); // 123
//
// var p = 1 + 2 + 3 + '';//'6' string
// var z = '' + 1 + 2 + 3;// '123' string
// //
// console.log(p, typeof p); // ?
// console.log(z, typeof z); // ?
//
// var o = '123x';
// console.log(Number(o)); // NaN
// console.log(parseInt(o, 10)); // 123
// console.log(+o); // NaN
// console.log(typeof +o); // number
// console.log(Boolean(String(false))); //? false
//
// var h = [];
// console.log(h ? 1 : 2); // 1
//
//  Переменные
//
// let a = a + 1;
// console.log(a); // ReferenceError
//
//
//
// var b = b + 1;
// console.log(b); // NaN
//
//
//
// function foo(c) {
//   if (c > 0) {
//     var c = c + 10;
//     return c;
//   }
//   return c;
// }
// console.log(foo(15)); // 25
//
//
//
// function foo() {
//   console.log(d2); // '2'
//   let d1 = '1';
//   return function () {
//     console.log(d1); // '1'
//     console.log(d2); // '2'
//   };
// }
//
// const d2 = '2';
// const x = foo();
//
// x();
//
// //
//
// function giveMeX(showX) {
//   if (showX) {
//     let x = 5;
//   }
//   return x;
// }

// console.log(giveMeX(false)); // ReferenceError: x is not defined
// console.log(giveMeX(true)); // ReferenceError: x is not defined

//

// console.log(x); // ReferenceError: x is not defined
//
// var y = 1;
//
// console.log(y); // ?
//
// function car() {
//   if (false) {
//     var y = 2;
//   }
//   console.log(y);
// }
//
// car(); // undefined
// console.log(y); // ReferenceError: y is not defined
//
// //
//
var i = 1;
var j = {};

// (function () {
//   i++;
//   j.j = 1;
// })();
// console.log(i, j); // 2 { j:1 }
//
(function (i, j) {
  i++;
  j.k = 1;
})(i, j);
console.log(i, j); // 1 { k:1 }
//
// //
//
// // Бонус
//
// // Создать объект всеми возможными способами
//
const object1 = new Object();
const object2 = {};
const object3 = Object.create({});
const object4 = Object.assign({});

//
// //
//
// // Написать функцию глубокого сравнения двух объектов:
// // объекты могут быть любыми, и иметь любой уровень вложенности
//
const firstObj = { here: { is: 'on', other: '3' }, object: 'any' };
const secondObj = { here: { is: 'on', other: '2' }, object: 'any' };

const deepEqual = (firstObj, secondObj) => {
  if (typeof firstObj !== 'object' || typeof secondObj !== 'object') {
    return firstObj === secondObj;
  }
  if (firstObj === null && secondObj === null) {
    return true;
  }
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);
  if (keys1.length !== keys2.length) {
    return false;
  }
  if (!keys1.every(key => keys2.includes(key))) {
    return false;
  }
  return keys1.every(key => deepEqual(firstObj[key], secondObj[key]));
};

//

console.log(deepEqual(firstObj, secondObj)); // false;
