function sayHelloTo(name) {
    const message = 'Hello ' + name

    return function() {
        console.log(message);
    }
}
const helloToAlex = sayHelloTo("Alex")
helloToAlex(); // Hello Alex
console.log(helloToAlex); // function

console.log('==========================================================');
function createFrameWorkManager() {
    const fw = ['Angular', 'React']
    
    return {
        print: function () {
            console.log(fw.join(' '));
        },
        add: function (framework) {
            fw.push(framework)
        }
    }
}
const manager = createFrameWorkManager()
// console.log(manager); //{ print: [Function: print], add: [Function: add] }
manager.print()
manager.add('VueJs')
manager.print()


console.log('=====================setTimeout ONE============================');
const fib = [1, 2, 3, 5, 8, 13]
for (var i=0; i<fib.length; i++) { // let will fix it
    setTimeout(() => {
        console.log(`fib[${i}] = ${fib[i]}`);
    }, 1500);
}
console.log('=====================setTimeout TWO============================');
for (var i=0; i<fib.length; i++) { 
    (function(j) {
        setTimeout(() => {
            console.log(`fib[${j}] = ${fib[j]}`);
        }, 1500);
    })(i) 
}
