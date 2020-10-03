// куда ссылается this - на в котором эта функция вызвана, на то, что стоит слева от точки.

function log() {
  console.log(this); // {}
}

const arrowLog = () => console.log(this); // {}

const person = {
  name: 'Mark',
  age: '34',
  log: log,
  arrowLog: arrowLog,

  delayLog:function () {
    setTimeout(() => {
      console.log(this.name + ' ' + this.age);
    }, 500);
  },
};

function fooNew() {
  let bb = 99
  this.a = 100
  console.log(this);
}
new fooNew // fooNew {}

person.log() // object person
// person.arrowLog() // global object window like {}
// person.delayLog(); // стрелочная функция не привязала контекст к window (у setTimeout)  

// ======================================================================================

// const array = [1, 2, 3, 4, 5]

// const multiplyBay = (arr, n) => {
//   return arr.map(i =>  i * n)
// }

// console.log(multiplyBay(array, 2));

// ==========================================

// Array.prototype.increment = function (n) {
//   return this.map(i => i * n)
// }
// console.log([5, 5, 6].increment(4));

// ==================================================================
// const obj = {
  
//   method() {
//     this.a = 4
//     console.log(this);

//     const foo = () => {
//       this.b = 10
//       console.log(this.a);
//     }
//     foo()
//   }
// }
// obj.method()