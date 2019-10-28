function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('black', 'CAT')
console.log(cat);
console.log('===================================================');


function myNew(constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}
const cat2 = myNew(Cat, 'black', 'CAT')
console.log(cat2);
console.log('===================================================');

const cat3 = new Cat()
console.log(cat3);