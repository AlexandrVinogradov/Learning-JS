// function Fun (race) {
//   this.name = 'Brain',
//   this.age = '32 ' + race
//   console.log(this);
// }

// const callFun = new Fun('one')
// Fun('one')

const user = {
  name: 'Elena',
  age: '27',
  sayBye() {
    console.log(this.bbb);
  },
};

user.sayHi = () => {
  console.log(user.name + ' says hello');
};

// console.log(user);
user.sayBye();

let obj = {
  go: function () {
    alert(this);
  },
};

obj.go();

let calculator = {
  read(val01, val02) {
    this.val01 = val01;
    this.val02 = val02;
  },
  sum() {
    if (!this.val01 || !this.val02) return;
    this.sum = this.val01 + this.val02;
  },
};

calculator.read(1, 2);
calculator.sum();
console.log(calculator);

alert(calculator.sum());
alert(calculator.mul());

// =======================================================================

class MyClass {
  constructor() {
    this.isFetching = false,
    this.isAuth = false,
    this.currentUser = {
      uuid: 'asdg33242vs',
      password: 'qwerty',
      date: '01.02.1990'
    }
  }

  get uuid() {
    return this.currentUser.uuid
  }
}

let myClass = new MyClass()
console.log(myClass.uuid());


class MyClassChild extends MyClass {
  constructor() {
    super()
    this.child = 'yo'
  }
}

let myClassChild = new MyClassChild()
console.log(myClassChild.isFetching);


