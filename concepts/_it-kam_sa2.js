function eventLoop() {
    console.log('one');
    setTimeout( () => {console.log('two')}, 0)
    setTimeout( () => {console.log('three')}, 1000)
    console.log('four');
}
eventLoop()