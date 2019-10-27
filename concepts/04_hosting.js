// стрелочные не стрелочные
//console.log(sum(1, 41)); // error
const sum = (a, b) => {
    return a+b
}
console.log('fun:', sum(1, 41)); 

console.log(i); // undefined
var i = 42
console.log(i); //42

console.log('===========const and let dont have hosting ===============');
//console.log(a); //error 
let a = 34 
console.log(a); //34
console.log('===========function declaration===========================');
console.log(square(9));
function square(numb) {
    return numb ** 2
}
console.log(square(9));

console.log('===========function expression===========================');
// console.log(foo(7)); // error
const foo = function (numb) {
    return numb ** 2
}
console.log(foo(7));



