//  map, filter, foreach, reduce, find, sort, some, every,  includes

const items = [
    {name: 'Bike',     price: 100 },
    {name: 'TV',       price: 200 },
    {name: 'Album',    price: 10  },
    {name: 'Book',     price: 5   },
    {name: 'Phone',    price: 500 },
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25  }
]

const itemNames = items.map(i => { i.name });               console.log('MAP: ',      itemNames);           // map return new array
const filteredItems = items.filter(i => i.price <= 100);    console.log('FILTER: ',   filteredItems);       // map return new array
const foundItem = items.find(i => i.name === 'Book');       console.log('FIND: ',     foundItem);           // find return value first detected element || undefined
items.forEach(i =>                                          console.log('FOREACH: ',  i.price))             // perform function to every element onece
const hasInexpensiveItems = items.some(i => i.price <=10);  console.log('SOME: ',     hasInexpensiveItems); // return true/false (at least one value)
const allMostExpensive = items.every(i => i.price >=1000);  console.log('EVERY: ',    hasInexpensiveItems); // return true/false (if all elements satisfy the condition)
const total = items.reduce((summ, i) => i.price + summ, 0); console.log('REDUCE: ',   total);               // summ without additional variable 
const items2 = [1, 2, 3, 4, 5] 
const includesTwo = items2.includes(0);                     console.log('INCLUDES: ', includesTwo);         // return true/false array contain whether value

const buffer = [
    [1, 4, 5],
    [4, 4, 5],
    [1, 4, 7],
]
const wut = buffer.reduce((acc, b) => (acc+b.length), 0);  console.log(wut);


