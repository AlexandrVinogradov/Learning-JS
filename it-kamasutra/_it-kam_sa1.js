let a = {}
let b = {}
let i = {}
a.name = 'Sam';
a['color'] = 'red';
b[a][i] = { isMine: false, opened: false, row: i};
console.log(a);


let GRID_ROWS = 5;
let randomRow = Math.floor(Math.random() * GRID_ROWS);
console.log(randomRow);





var d = {}
const arr = ['zebra', 'horse']
arr.forEach(function(k) {
    d[k] = undefined;
})
console.log(d);



for(let i=0; i<5; i++) {
    setTimeout( () => {console.log(i);}, i * 1000 )
}
console.log('========================== IT_KAM_SA1 =========================');
for( var i=0; i<5; i++) {
    ((j) => {     setTimeout(() => {console.log(j) },   i * 1000)     })(i)
}



//console.log(false == '0');   // true
//console.log(false === '0'); //false


// How add an element at the begginig and end of array
// const arr = [4]; 
// arr.push(1)
// console.log(arr);
// arr.unshift(3)
// console.log(arr);
// arr2 = [0, ...arr, 0]
// console.log(arr2);


// console.log(1 + '2' + '2');         //'122'
// console.log(1 + +'2' + '2');       // '32'
// console.log(1 + -'1' + '2');      //  0 + '2' = '02'
// console.log(+'1' + '1' + '2');   // '112'
// console.log('A' - 'B' + '2');   // NaN2
// console.log('A' - 'B' + 2);    // NaN
// console.log('a' - 's' + '4');    // NaN4


for(let i=0; i<5; i++) {
    setTimeout( () => {console.log(i);}, i * 1000 )
}

for(var i=0; i<5; i++) {
    ((j) => setTimeout(() => {console.log(j);}, i * 1000) )(i)
}




