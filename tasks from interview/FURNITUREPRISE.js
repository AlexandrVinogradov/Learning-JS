console.log(0.1 + 0.2 == 0.3);
console.log('________________________');

console.log(Number('string') == NaN);
console.log('________________________');

var myMap = new Map();
myMap.set(NaN, 'not a number');
myMap.get(NaN) === 'not a number';
console.log(myMap);
console.log('________________________');

console.log(true - false === true);
console.log(true - false == true);
console.log('________________________');

console.log(typeof []);
console.log(typeof NaN);
console.log('________________________');

console.log((![] + [])[0]);
console.log('________________________');


console.log((![] + []));
