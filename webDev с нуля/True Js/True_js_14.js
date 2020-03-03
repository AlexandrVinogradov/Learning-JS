// ===================================================
// lesson 14
// Methods .map()
// ===================================================

// .map() scan our massive made some action and create a new massive

let a = [3, 4, 5];
// TASK: each element *2    => [6, 8, 10]

// ======================================
// variant for noobs
let b = [];
for (let i=0; i<a.length; i++) {
    b[i] = a[i] * 2;
}
console.log(a);
console.log(b);
console.log('-----------------------------');
// ======================================

// syntax
// let b = a.map( function(currentValue, index, array){
//     return ???;
// } ); 

let c = a.map(function(x){
    return x * 2;
});
console.log(c);



let arr1 = [3, 6, 6, 8, 1, 3];
let arr2 = arr1.map(function(x){    
    if (x % 2 === 0) {
        x = x * 2;
    } else {
        return x;
    }
}); 
console.log(arr2);

console.log('-----------------------------');

