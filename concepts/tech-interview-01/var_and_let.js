var a // also with let
console.log(a); // undefined 
a = 4
console.log(a); // 4

// ==========================

console.log(b); // cant get access before initialization
const b = 10 
console.log(b);

console.log(z); // undefined - переменная есть, но значение еще не присвоили 
var z = 10 
console.log(z); // 10

