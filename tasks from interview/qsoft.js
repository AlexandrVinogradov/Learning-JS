console.log(hash);

hash;
console.log(hash); // уже присвоено из-за всплытия

hash = 'abc';
console.log(hash);

function hash() {
  return 'zyx';
}
console.log(hash); // [Function: hash] всплывет потому, что function declaration 

hash += 'def';
console.log(hash);





var num = 1;

function calc() {
  if (!num) {
    var num = 10;
  }
  console.log(`num: ${num}`);
}

calc();
console.log(`num: ${num}`);
