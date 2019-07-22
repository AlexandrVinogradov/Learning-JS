// ===================================================
// lesson 13
// radio btn
// ===================================================

var radio = document.getElementsByName('prim');

for (var i=0; i<radio.length; i++) {
    radio[i].onchange = testRadio;
}
function testRadio() {
    console.log (this.value);
}

document.getElementById('btn1').onclick = checkRadio;

function checkRadio() {
    var m = document.getElementsByName('prim');
    for (var i=0; i<m.length; i++) {
        if ( m[i].checked ) {
            alert ( m[i].value );
            break;
        }
    }
}

// ===================================================
// lesson 14
// css generator
// ===================================================

document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
    // our div
    var div = document.getElementById('test');

    // for value input
    // console.log (this.value);

    // getting textarea
    var out = document.getElementById('out');

    div.style.borderRadius = this.value + 'px';

    // we need str: bordr-radius: 30px
    out.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
    out.innerHTML += 'border-radius: ' + this.value + 'px;';
}

// ===================================================
// lesson 15
// associative massives
// simple massive => element [number]
// associative massive => element [name]
// ===================================================

// var m=[4, 12, 'hello'];
//     console.log ( m );
var m = {};
var n = {
    // "property/key": "value",
    "one": 12,
    "hello": "world",
    "prim": 2000,
    "double key": 777
};
n.one = 9000;
// console.log ( n['prim'] );
console.log (n.one);
var ppp = 'hello';

// who scan associactive massive:
var out = document.getElementById('outLess15');
for (var key in n) {
    out.innerHTML += key + ' --- ' + n[key] + '</br>';
}

// ===================================================
// lesson 16-17
// tasks associactive massives
// ===================================================

var human = {
    "name": "Alex",
    "age": 25,
    "sex": "male",
    "indiv_number": "7733182"
};
// console.log (human);
// console.log (human['name']);
// var z = 'name';
// console.log (human[z]);

var human2 = {
    "name": "Alex",
    "age": 25,
    "sex": "male",
    "indiv_number": "7733182",
    "year": function() {
        return 2019 - this.age;
    }
};
console.log(human2.year());

var task3 = {
    "mas": [5, 6, 34, 12, 45],
    "sum": function() {
        var sum = 0;
        for (var i=0; i<this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
};
console.log(task3.sum());

var goods = {
    "12423" : {
        "name": "Banan",
        "prise": 30,
        "img": "https://cdn0.iconfinder.com/data/icons/fruits-vegetables-13/24/banan_fruit_health_food_healthy-256.png",
        "stock": "yes",
    },
    "12433" : {
        "name": "Tomato",
        "prise": 40,
        "img": "https://cdn0.iconfinder.com/data/icons/food-beverages-5/512/tomato_slice_vegitable_veg_food_tasty_healthy-256.png",
        "stock": "no",
    },
};
console.log(goods);
var out16 = '';
    for (var key in goods) {
        out16 += 'Name: ' + goods[key].name + '</br>';
        out16 += 'Prise: ' + goods[key].prise + '</br>';
        out16 += '<img src="' + goods[key].img+'">' + '</br>';
        out16 += 'stock: ' + goods[key].stock + '</br>';
        out16 += '<hr>';
    }
document.getElementById('outLess16').innerHTML = out16;

// ===================================================
// lesson 18
// mouse event
// ===================================================

var block = document.getElementById('one18');

// mouse click 
// block.onclick = function() {
//     this.style.background = 'orange';
//     this.onclick = null;
// }

// double click 
// block.ondblclick = function() {
//     this.style.background = 'red';
// }

// the right button mouse
block.oncontextmenu = function() {
    this.style.background = 'purple';
    return false;
}

// ban contecstMenu on site
document.oncontextmenu = function() {
    // return false;
}


// hover 
// block.onmouseenter = function() {
//     this.style.background = 'black';
//     console.log('blaaack');
// }
// // -hover 
// block.onmouseleave = function() {
//     this.style.background = 'green';
// }



// mouse move inside blocl 
// var w = 0;
// block.onmousemove = function() {
//     w++;
//     this.style.width = 100 + w + 'px';
// }

// hold mouse btn 
block.onmousedown = function(event) {
    this.style.background = 'cyan';
    //crossbrowser
    console.log('button' + event.button);
    console.log('which' + event.which);
}
    // stop hold mouse btn into block
    block.onmouseup = function () {
        this.style.background = 'gold';
    }

// ===================================================
// lesson 19
// mouse event
// ===================================================

// load img from js_script
document.onmousemove = function() {
    // load img when page is started
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img id="nurse" src="images/nurse.png">')
    var nurse = document.getElementById('nurse');
    nurse.style.position = 'fixed';

    // cheange mousemove 
    document.onmousemove = function(event) {
        nurse.style.left = event.clientX + 20 + 'px';
        nurse.style.top = event.clientY + 20 +'px';

    }
}

// ===================================================
// lesson 20
// photo effect
// ===================================================


