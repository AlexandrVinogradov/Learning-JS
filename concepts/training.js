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