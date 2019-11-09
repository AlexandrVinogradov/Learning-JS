(function eventLoop() {
    console.log('one');
    setTimeout( () => {console.log('three')}, 1000)
    setTimeout( () => {console.log('two')}, 0)
    console.log('four');
})()
// queue FIFO  .pop()
// stack LIFO
// pop():     Remove an item from the end of an array.
// push():    Add items to the end of an array.
// shift():   Remove an item from the beginning of an array.
// unshift(): Add items to the beginning of an array.