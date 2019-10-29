console.log('========================== IT_KAM_SA1 =========================');

for( var i=0; i<5; i++) {

    ((j) => {     setTimeout(() => {console.log(j) },   i * 1000)     })(i)
}


// for(i=0; i<5; i++) {
//     setTimeout( () => {console.log(i);}, 1000 )
// }