// ===================================================
// lesson 20
// function
// ===================================================

let t = -3;
// if (t>0) {
// console.log('more then 0');
// } else if (t<0) {
//     console.log('less then 0');
// } else {
//     console.log('t is equal 0');
// }


// function showTemp() {
//     if (t>0) {
//     console.log('more then 0');
//     } else if (t<0) {
//         console.log('less then 0');
//     } else {
//         console.log('t is equal 0');
//     }
// }
// showTemp();


function showTemp(z) {
    if (z>0) {
        return 'more then 0';
    } else if (z<0) {
        return 'less then 0';
    } else {
        return 't is equal 0';
    }
}
console.log( showTemp(66) );




// a+b
// function sum(a = 0, b = 0) {
//     console.log(a+b);
// }
// let c = 10;
// sum(c);

function sum(a = 0, b = 0) {
    return a+b;
}
let c = 10;
sum(c);

console.log( 3 * sum(2,4) )

// ===================================================
// lesson 21
// function
// ===================================================
console.log('-------------------------');


let m = 999;
console.log( testPrimer() );
function testPrimer() {
    return m;
}

// ===================================================
// lesson 22
// function
// ===================================================
console.log('-------------------------');


function getSumm() {
    console.log(3*5);
}
getSumm();

// function expression
let w = function() {
    console.log(4*6);
}
w();

let z = function test() {
    console.log(4*54);
}
z();

// ===================================================
// lesson 23
// function
// ===================================================
console.log('-------------------------');

function summ() {
    console.log('hello' + ' world');
}
summ();

// arrow function
let myFunction = h => {
    console.log('work');
    console.log(h * 5);
}
myFunction(5);

// var 1 
let var_1 = (a, b, d) => {
    //
    //
    return b;
}
// var 2 (0 agryment)
let var_2 = () => {
    //
    //
    return true;
}
// var 3   (one argument)
let var_3 = j => {
    //
    //
    return b;
}
// var 4  (one action)
let var_4 = (a, b, c) => d*c;

// ===================================================
// lesson 24
// call back functoin
// ===================================================
console.log('------------------------- call back');


let first = (y) => {
    console.log(1);
    y();
}


let second = (b, k) => {
    console.log(b*k);
}

first( function() {
    second(5,7);
});
//  second(4,7);

