// ===================================================
// lesson 20
// photo effect
// ===================================================

document.getElementById('myslide').onmousemove = function(event) {
    var x = event.offsetX; // by parent
    console.log(x);
    document.getElementById('two20').style.width = x + 'px';
    // remove two20 when mouseleave
    document.getElementById('myslide').onmouseleave = function() {
        document.getElementById('two20').style.width = 128 + 'px';
    }
}

// ===================================================
// lesson 21
// timer
// ===================================================

var shift = 0;
var test21 = document.getElementById('test21');
var timer;
// set interval(function_name, time)

//move();

function move() {
    test21.style.marginLeft = shift + 'px';
    shift += 10;
    timer = setTimeout(move, 50);
}

// var timer = setInterval(move, 50); //1s = 1000ms
document.getElementById('stop').onclick = function() {
    // clearInterval(timer);
    clearTimeout(timer);
}

// setTimeout(move, 5000);



// var a = 10;
// obr();
// function obr() {
//     document.getElementById('out20').innerHTML = a;
//     a--;
//     if (a<0){ 
//         clearTimeout(timer);
//         alert('timer is end');
//     }
//     timer = setInterval(obr, 1000);
// }




