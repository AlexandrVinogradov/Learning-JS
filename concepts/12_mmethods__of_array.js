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

const itemNames = items.map(i => { // map return new array
    return i.name 
}); console.log(itemNames);

const filteredItems = items.filter(i => i.price <= 100);  console.log(filteredItems);  // map return new array
const foundItem = items.find(i => i.name === 'Book');     console.log(foundItem);  // find return value first detected element || undefined
 



// console.log(items);