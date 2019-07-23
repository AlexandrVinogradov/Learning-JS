// lesson 1 
// input square of number
// ==================================================

function square() {
    // document.getElementById('inp1').value
    alert(document.getElementById('inp1').value * document.getElementById('inp1').value);
}

// ===================================================
// lesson 2-3
// variables
// ===================================================

function squareVariable() {
    var num1; // variable
    var num1 = document.getElementById('inp2').value;
    alert(num1 * num1);
}

// ===================================================
// lesson 4
// calculator
// ===================================================

function plus() {
// summa
    var num1, num2, resulr;
    var num1 = document.getElementById('n1').value;
    num1 = parseInt(num1); // cut for int number

    var num2 = document.getElementById('n2').value;
    num2 = parseInt(num2); // cut for int number

    result = num1 + num2;
    // innerHTML - two tags and u need put <>between</>
    document.getElementById('out').innerHTML = result;
}
function minus() {
// defference
    var num1, num2, resulr;
    var num1 = document.getElementById('n1').value;
    num1 = parseInt(num1); // cut for int number

    var num2 = document.getElementById('n2').value;
    num2 = parseInt(num2); // cut for int number

    result = num1 - num2;
    // innerHTML - two tags and u need put <>between</>
    document.getElementById('out').innerHTML = result;
}
function multiply() {
// multiply   
    var num1, num2, resulr;
    var num1 = document.getElementById('n1').value;
    num1 = parseInt(num1); // cut for int number

    var num2 = document.getElementById('n2').value;
    num2 = parseInt(num2); // cut for int number

    result = num1 * num2;
    // innerHTML - two tags and u need put <>between</>
    document.getElementById('out').innerHTML = result;
}

// ===================================================
// lesson 5
// calculator
// ===================================================

function outLess5() {
    var p;
    p = document.getElementById('outLess5'); // input whole <p></p>
    // p.innerHTML = 'Hello';

    // to add more information
    // p.innerHTML += ' Hello'; // p.innerHTML = p.innerHTML + ' Hello';

    // p.insertAdjacentHTML('beforeBegin', 'Hi');
    // before openning tag
    // p.insertAdjacentHTML('afterBegin', 'Hi');
    // after openning tag
    // p.insertAdjacentHTML('beforeEnd', 'Hi');
    // before closing tag
    // p.insertAdjacentHTML('afterEnd', 'Hi');
    // after closing tag

    // p.outerHTML = '<strong>' + p.innerHTML + '</strong>';   // changing tags
    p.outerHTML = '<div class="waw">apears a new block</div>';
}

// ===================================================
// lesson 6
// branching
// ===================================================

// var a, b;
// a = 9;
// b = 8;

// if (a > b) {
//     alert('first number is graster');
// }
// else if (a == b) {
//     alert('numbers are equals')
// }
// else {
//     alert('second number is graeter')
// }

function comparisonLess6() {
    var num1, p;
    num1 = document.getElementById('inpLess6').value;
    var p = document.getElementById('outLess6');
    //cut variants like: 6d 535ddg
    num1 = parseInt(num1);

    if (num1 < 100) {
        p.innerHTML = 'The number is less than 100';
    }
    else if (num1 == 100) {
        p.innerHTML = 'The number is equal 100';
    }
    else {
        p.innerHTML = 'The number is greater then 100';
    }
}

// ===================================================
// lesson 7
// Game: To guess the number
// ===================================================