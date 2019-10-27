// primitive
let a = 42
let b = a
b++
console.log('a', a); // 42
console.log('b', b); //43

let c = [1, 2, 3]
let d = c
d.push(4)
console.log('c', c); // [1, 2, 3, 4]
console.log('d', d); // [1, 2, 3, 4]

let cc = [1, 2, 3]
let dd = cc.concat()
dd.push(4)
console.log('cc', cc); // [1, 2, 3, 4]
console.log('dd', dd); // [1, 2, 3]

let ee = [1, 2, 3, 4]
console.log(cc === ee) // false