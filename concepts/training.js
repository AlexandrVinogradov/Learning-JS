// bestLenguage = (leng) => {
//     const message = 'THE_BEST_LENGUAGE_IS ' + leng

//     return () => {
//         console.log(message);
//     }
// }
// const BLISJS = bestLenguage('js')
// bestLenguage()
// console.log(BLISJS);

// const createZoo = () => {
//     const animals = ['doog', 'cat']

//     return {
//         add: (animal) => {
//             animals.push(animal)
//         },
//         print: () => {
//             console.log(animals);
//         }
//     }
// }


// const manager = createZoo()
// manager.add('mouse')
// manager.print()



class Dog {
    constructor(name) {
        this.myname = name;
        this.voice = function() {
            console.log('Hey, my name is ' + this.myname);
        }
    }
}
const animal = new Dog('Bruno');
animal.voice();

// function Dog(name) {
//     this.myname = name;
//     this.voice = function() {
//         console.log('Hey, my name is ' + this.myname);
//     }
// }

// const animal = new Dog('Bruno');
// animal.voice();