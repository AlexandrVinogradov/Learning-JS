// ===================================================
// lesson 12
// Methods of massive
// ===================================================

// method .push()     = add elements in the end of array
let arr12 = [2, 7];
arr12.push(21, 111);
console.log(arr12);
// method .pop()      = delet last element of arry
arr12.pop();
console.log(arr12);
// method .shift()    = delet first element of arry
arr12.shift();
console.log(arr12);
// method .shift()    = add elements in the start of array
arr12.unshift(78);
console.log(arr12);
// method .split()    = str => array 
let str12 = 'hi, my, name, is, Alex';
let arr12sp = str12.split(','); //method .trim()   = delete space
console.log(arr12sp);
// methob .join()     = array => str
console.log(arr12sp.join(" "));
// method .slice()    = create new array = part of first array
let arr12sl = arr12sp.slice(2,4);
console.log(arr12sl);

// destructuring
let a = [2, 7];
// let b = a[0];
// let c = a[1];
let [b, c] = a;
console.log(b, c);

console.log('----------------------------------------------------');

// ===================================================
// lesson 13
// Arrays for what?
// ===================================================

// if tag havent id we must use array
let arr13 = document.getElementsByTagName('p');
console.log(arr13);
// change style to three <p>
arr13[2].style.color = 'red';
// change style to all <p>
for (let i=0; i < arr13.length; i++) {
    arr13[i].style.color = 'red';
}

let arr131 = document.getElementsByClassName('ttt');
let arr132 = document.querySelectorAll('.ttt');
for (let j=0; j<arr132.length; j++) {
    arr132[j].onclick = function() {
        alert('work');
    }
}
console.log(arr131);
console.log(arr132);

// if we get some data we must use array
let tempC = [-4, -3, -1, 2, 2, 3, 4, 5, 6, 6, 4, 2];
let sum = 0;
    for (let c=0; c < tempC.length; c++) {
        sum += tempC[c];
    }
console.log(sum / tempC.length);

console.log('----------------------------------------------------');
let tempC2 = [
    [-4, 0, 3],
    [-5, -1, 8],
    [0, 3, 6]
];
for (let k=0; k<tempC2.length; k++) {
    let CA = 0;
        for (let l=0; l < tempC2[k].length; l++) {
            CA += tempC2[k][l];
        }
        console.log( CA / tempC2[k].length);
} 
console.log('----------------------------------------------------');




