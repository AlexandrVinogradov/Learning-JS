function createFrameWork() {
    const fw = ['angular', 'vue']

    return {
        print: function() {
            console.log(fw)
        },
        add: function(framework) {
            fw.push(framework)
        }
    }
}

const manager = createFrameWork()
manager.add('react')
manager.print()



for( var i=0; i<5; i++) {
    ((j) => {setTimeout(() => {console.log(j)}, i*1000) }  )(i)
}

setTimeout(() => {
    
}, timeout);




let c = [1, 5, 6, 6, 10]

const ourPain = (c) => {
    let n = [];
    return {
        add: function() {
            c.push(3)
            console.log(c);
        }
        
    }
}

let start = ourPain()
start.add(c)
ourPain(c);
console.log(c);







setInterval( () => {
    console.log('oi');
}, 1000 );
clearInterval()

setTimeout(()=>{
    console.log('hi')
}, 2000);