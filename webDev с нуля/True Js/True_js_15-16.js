// ===================================================
// lesson 15
// Methods .filter()
// ===================================================
// .filter() use for filter entering into array. Create new array gont changing initial array


// TASK: enter elements >= 0
let a = [3, -12, 0, 4, 5, -8];
let b = [];
for (let i=0; i<a.length; i++) {
    if (a[i] >= 0) {
        b.push(a[i]);
    }
}
console.log(a);
console.log(b);

// let c a.filter(function(currentValue, indexElem, arr){
// });

let c = a.filter(function(currentValue, index){
    return index % 2 == 0 && currentValue >0;
});
console.log(c);


console.log('---------------------------------------------');
// ===================================================
// lesson 16
// What faster for or while?
// ===================================================

// TASK: sum [0:5000000] use for

// let sum = 0;
// for (let i=0; i<=5000000; i++) {
//     sum += i;
// }
// console.log(sum);

// TASK: sum [0:5000000] use while

let sum2 = 0;
let j = 0;
while (j<=5000000) {
    sum2 += j;
    j++;
}
console.log(sum2);
