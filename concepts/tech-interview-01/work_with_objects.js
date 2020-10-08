/* [
    { "banana": 10},
    { "pineapple": 20},
    { "rise": 30},
    { "watermelon": 100},
] */

var fruits = {
  "banana": 10,
  "rise": 30,
  "pineapple": 20,
  "watermelon": 100
}


const foo = Object.keys(fruits).sort().map(el => ({[el] : fruits[el]}))
console.log(foo);


arr[0] 

















// const sortArr = Object.keys(fruits).sort().map(el => {
// 	el: fruits['el']
// })
// console.log(sortArr)

// Object.keys
// Object.values

// Задача. Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').
// const array = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]

// let newArr = array.forEach(el => {
//   return el.forEach(inner => {
//     if(inner === 4) {
//       return inner
//       console.log('object');
//     }
//   })
// })
// console.log(newArr);












// var fruits = {
//   "banana": 10,
//   "rise": 30,
//   "pineapple": 20,
//   "watermelon": 100
// }

// const sortedFruits = []

// const foo = Object.keys(fruits).sort().map((el, index) => {
//   // return {foo}
//   sortedFruits[index] = new Object()
//   sortedFruits[index]['el'] = el

//   // console.log(el);
// })

// // console.log(foo);

// console.log(sortedFruits);