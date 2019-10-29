//  let 
let a = 'Variable a'
let b = 'Variable b'

{
    a = 'New variable A'
    let b = 'Local variable B' ////// let
    console.log('Scope A:', a);
    console.log('Scope B:', b);
}
console.log('A:', a);
console.log('B:', b);

// const 
const PORT = 8080
// PORT = 1010 // error
const array = ['javascript', 'is', 'awesome']
array.push('!') // we can!
array[0] = 'js' // we can!
//array = '' // we can`t
console.log(array);

const obj = {}
obj.name = 'alex',
obj.age = 22
console.log(obj);
obj.age = 55
console.log(obj);
//obj = '' // we cant