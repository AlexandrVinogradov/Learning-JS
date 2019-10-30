// const buffer = [
//     [1, 4, 5],
//     [4, 4, 5],
//     [1, 4, 7],
// ]
// const wut = buffer.reduce((acc, b) => (acc+b.length), 0);  console.log(wut);

let summa = (a, b) => {  // sum(2,3) == sum(2)(3) == 5
    if(b) {
        return a + b
    }
    return (c) => {
        return a+c
    }

}; 
console.log( summa(2, 3) );
console.log( summa(2)(3) );

