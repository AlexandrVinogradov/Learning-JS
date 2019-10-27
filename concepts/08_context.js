const person = {
    surname: 'Stark',
    knows: function(what, name) {
        console.log(`you ${what} know, ${name} ${this.surname}`);
    }
}
person.knows('all', 'Bran')

// 1:07:00