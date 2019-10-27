const person = {
    surname: 'Stark',
    knows: function(what, name) {
        console.log(`you ${what} know, ${name} ${this.surname}`);
    }
}
const jhon = { surname: 'Snow'}

person.knows('all', 'Bran')

person.knows.call(jhon, 'nothin', 'Jhon')
person.knows.apply(jhon, ['nothin', 'Jhon'])
person.knows.call(jhon, ...['nothin', 'Jhon'])
person.knows.bind(jhon, 'nothin', 'Jhon')() // return new functi, we can create new variable or call right now

console.log('====================================');

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this);
}
const elena = new Person('Elens', 20)


console.log('=========== explicit ===================');
function  logThis() {
    console.log(this);
}
const obj = {num: 42}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()
console.log('============== implicit way ================');
const animal = {
    legs: 4, 
    logThis: function  () {
        console.log(this);
    }
}
animal.logThis()

console.log('==============================');
function cat(color) {
    this.color = color
    console.log('this', this)
    ;( () => console.log('Arrow this', this) )()
}
new cat('red')
