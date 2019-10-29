// 7 types (6 primitive) (1 calculated)
// null, undefined, boolean, number, string, symbol, {object} 
console.log(typeof Math);
console.log(typeof Symbol('js'));

console.log(typeof null); //object -> mistake type = null. not object
console.log(typeof function() {});// function 
console.log(typeof NaN);// number

// null => {} = null
// undefined => let b, function that havent return
console.log('===========================================================');
// false values(5): '', 0, null, undefined, false
console.log(Boolean('')); // false

console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(function() {})); // true

console.log('===========================================================');
console.log(1 + '2');       // '12'
console.log('' + 1 + 0);    // '10'
console.log('' - 1 + 0);    // -1
console.log('3' * '8');     // 24
console.log(4 + 10 + 'px'); // '14px'
console.log('px' + 5 + 10); // 'px510'
console.log('42' - 40);     // 2
console.log('42px' - 2);    // NaN      (NaN-2)=NaN
console.log(null + 2);      // 2
console.log(undefined+2);   // NaN
console.log('======================= == vs === =========================');
// == по значению с преведением типов 
// === по значению без приведения типов
console.log(2 == '2');           // true
console.log(2 === '2');          // false
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log('0' == false);       // true
console.log('0' == 0);           // true

console.log(false == '');        // true
console.log(false == []);        // true /////////////
console.log(false == {});        // false
console.log('' == 0);            // true
console.log('' == []);           // true//////////////
console.log('' == {});           // false

console.log(0 == []);            // true//////////////
console.log(0 == {});            // false
console.log(0 == null);          // false

