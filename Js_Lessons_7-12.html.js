// ===================================================
// lesson 7
// Game: To guess the number
// ===================================================



////// Cut from function for load before
var prNum, tempOut;
//random number [1:10]
prNum = Math.floor((Math.random() * 10) + 1);

// getting p_temp
// tempOut = document.getElementById('temp-out');

//p_temp = random number
// tempOut.innerHTML = prNum;

console.log(prNum);

function btnLess7() {
    var num, out;

    // getting user number 
    num = document.getElementById('inpLess7').value;
    // getting p_out
    out = document.getElementById('outLess7');

    if (num == prNum) {
        out.innerHTML = 'wow, u are right'; 
    }
    else if (num > prNum) {
        out.innerHTML ='OOh, your number is greater((';
    }
    else {
        out.innerHTML = '=( your number is less, try again';
    }
}

// ===================================================
// lesson 8
// cycle FOR
// ===================================================

function btnLess8() {
    var p;
    p = document.getElementById('outLess8');
    // cycle with specified number of action
    for (var i=0; i<100; i++) {
        p.innerHTML += i+' ';
        // p.innerHTML = p.innerHTML + i;
    }
}
// +=    - ADD, NOT A CHANGE!

// ===================================================
// lesson 9
// cycle WHILE
// ===================================================

function btnLess9() {
    var p, p2;
    p = document.getElementById('outLess9'); 
    p2 = document.getElementById('outLess9.2'); 

    var i = 0;
    while (i < 50) {
        p.innerHTML += i +' ';
        i++;
    }

    var j = 0;
    do {
        p2.innerHTML += j + ' ';
        j++;
    }
    while (j<30);
}

// ===================================================
// lesson 10
// Massivee
// ===================================================

var m = [];
var m1 = [99, 33, 'hello'];
m1[3] = 444;
m1[4] = 4444;
console.log (m1 [3]); 
// alert (m1.length);

// for (var i = 0; i<m1.length; i++) {
//     document.getElementById('outLess10').innerHTML += m1[i] + '</br>';
// }

function masOut() {
    var p = document.getElementById('outLess10');
    var str = '';
    for (var i = 0; i<m1.length; i++) {
        str += i +' --- ' + m1[i] + '</br>';
    }
    p.innerHTML = str;
}

masOut ();

function btnLess10() {
    var i1 = document.getElementById('inpLess10').value;
    // add new last element
    m1.push(i1);
    masOut();
}

function btnLess101() {
    // delete last element
    m1.pop();
    masOut();
}

// ===================================================
// lesson 11
// Slider
// ===================================================

document.getElementById('slider-left').onclick = sliderLeft;

var left = 0;
// for autoSlider
var timer;

function sliderLeft() {
    var line = document.getElementById('line');
    left = left - 128; 
    if (left < -512) {
        left = 0;
        // zeroing timer
        clearTimeout(timer)
    }
    line.style.left = left + 'px'; 
    // cycle for autoSlider
    autoSlider();
}

// function that activate   sliderLef() 
function autoSlider() {
    timer = setTimeout(sliderLeft, 1000); 
}
// start function 
autoSlider();




document.getElementById('slider-right').onclick = sliderRight;

function sliderRight() {
    var line = document.getElementById('line');
    left = left + 128; 
    if (left > 0) {
        left = -512;
    }
    line.style.left = left + 'px'; 
}

// ===================================================
// lesson 12
// worck with elements and classes
// ===================================================

var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');
console.log(p);

for (var i=0; i<p.length; i++) {
    p[i].onclick = f1;   
}
for (var i=0; i<one.length; i++) {
    one[i].onclick = f2;   
}
 

function f1() {
    this.style.background = 'pink';
}
function f2() {
    this.style.fontWeight = 'bold';
}

// ===================================================
// lesson 13
// worck with elements and classes
// ===================================================