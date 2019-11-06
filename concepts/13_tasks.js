// const buffer = [
//     [1, 4, 5],
//     [4, 4, 5],
//     [1, 4, 7],
// ]
// const wut = buffer.reduce((acc, b) => (acc+b.length), 0);  console.log(wut);

// let summa = (a, b) => {  // sum(2,3) == sum(2)(3) == 5
//     if(b) {
//         return a + b
//     }
//     return (c) => {
//         return a+c
//     }

// }; 
// console.log( summa(2, 3) );
// console.log( summa(2)(3) );

//-----------------------------------------------------------------------------------------------

// 1. function add 
add = (a) => {
    return (b) => {
        return a+b
    }
}
console.log(add(4));
// 2. army function 
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        console.log(i); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
