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

//-----------------------------------------------------------------------------------------------

// 1. function add 
add = (a) => {
    return (b) => {
        return a+b
    }
}
console.log(add(4)(4));

