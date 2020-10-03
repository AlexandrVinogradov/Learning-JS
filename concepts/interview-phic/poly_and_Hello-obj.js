// const isPolymorph = (string = null) => {
//   if (string === null) return 'you need a word'
//   if (typeof(string) !== "string") return 'type of argument must be string'
//   // console.log(string === string.split('').reverse().join(''));
//   return string === string.split('').reverse().join('')
// }
// // isPolymorph('asddsa')
// console.log(isPolymorph('asd'));

/*
--------------------------------------------------------------------------------
*/

const inputs = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};


// const buildString = (obj) => {
//   if(typeof(obj) !== 'object') return ''

//   return Object.keys(obj).reduce((acc, key) => {

//     obj[key].forEach(innerValue => {
//       acc[innerValue] = key
//     })
//     return acc

//   }, []).join('')
// }

const buildString = (obj) => {
  const result = [];

  for (let key in obj) {
    for (let valueOfInnerArray of obj[key]) {
      result[valueOfInnerArray] = key;
    }
  }
  return result.join('');
};
// buildString(inputs);

'Hello world' === buildString(inputs) && console.log('First case');
'' === buildString() && console.log('Second case');
