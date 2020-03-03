// ===================================================
// lesson 17
// for = map (speed)
// ===================================================

// ===================================================
// lesson 18
// method .every() {true/false}   .some()
// ===================================================

// TASK: is there array element<5
// noobs
let arr = [3, 4, 5, 9];
for (let i=0; i<arr.length; i++) {
    if (arr[i]<5) {
        console.log('yes');
    }
}
// =====================================================
// true for ever elements? 
let a = arr.every(function(x){
    return x<5;
});
console.log(a);


// .every()   if all true => true
// .some()   if one and more true => true

console.log('--------------------------------')
// ===================================================
// lesson 19
// method .reduse() (from first)      .reduseRight() (from last)
// ===================================================

let arr2 = [20, 4, 5, 9];
let b = arr2.reduce(function(prevValue, currentValue, index){
    console.log('prevValue = ' + prevValue);
    console.log('index = ' + index);
    console.log('currentValue = ' + currentValue);
    return prevValue + currentValue;
});
console.log(b);