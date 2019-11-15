function Yo() {
    
}
function Yo2() {

}
Yo.prototype.hello = function() {
    alert('alert');
}

var yo0 = new Yo();
yo0.__proto__
var yo1 = new Yo();
yo1.__proto__
var yo2 = new Yo();
yo2.__proto__

yo0.hello();
yo1.hello();