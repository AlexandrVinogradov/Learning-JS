// ===================================================
// lesson 25
// pseudo array (arguments)
// ===================================================


function one(a){
    "use strict";
    let b;
    console.log(a);
    arguments[0] = 'blabla'
    console.log(arguments);
    console.log(a);
    b = Array.from(arguments);
    console.log(b);

}

one(5, 2, 5, 7);

// ===================================================
// lesson 26
// objects asociactive array
// ===================================================
console.log('26 -------------------------------')

const hotel = {
    "name" : "u doma",
    "stars" : 3,
    "adv" :  function() {
        console.log(this.name + ' best hotel. Stars: ' + this.stars);
    },
    hi : "hello",
    "how much": 500
};

console.log( hotel.name );
hotel.adv();

let a = {};
a.hi = "test";
console.log(a);
console.log(a.hi);

console.log(hotel);

delete hotel.hi;
console.log(hotel);

// ===================================================
// lesson 27
// assignment by link
// ===================================================
console.log('27===========================')

let o = {
    one : "hello",
    name : 23
};

let b = {};
for (let key in a) {
    b[key] = a [key];
}

b.five = 5;

console.log(o);
console.log(b);

class Test {
    constructor(a){
        this.c = a;
    }
}

let myObj = new Test(5);
myObj.d = 77;
console.log(myObj);

let myObj2 = new Test(6);
console.log(myObj2);

console.log('=============================================================================')
console.log('=============================================================================')


let buffer = [
    [1, 54, 33, 55],
    [66, 2, 43, 22]
]
let summ = 0;
// buffer.forEach(array => array.map(e => summ += 1)) 
//     console.log(summ);

vv = buffer.reduce((acc, b) => (acc+b.length), 0)
console.log(vv);

// let summ = 0;
// let run = buffer.toString();
// console.log(run);
// let koko = run.map(e => summ += 1);
// console.log(koko);


// var arrr = ["Яблоко", "Апельсин", "Груша"];

// arrr.forEach(function(item, i, arr) {
//   console.log( arr.length );
// });