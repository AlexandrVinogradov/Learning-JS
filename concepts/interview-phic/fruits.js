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

const sortedFoo = (obj) => {
  const sortedFruits = []

  return Object.keys(obj).sort().map((fruit, id) => {
    sortedFruits[id] = {}

    for (let key of sortedFruits[id]) {
      sortedFruits[id][key] = 7
    }
    
    console.log(sortedFruits);

  })
}
sortedFoo(fruits)
// console.log(sortedFoo(fruits));
