class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    // return 'Hi, I am ' + this.name;
    return `Hi, I am ${this.name} and I am ${this.age} years old`;
  }

  getDescription() {
    return `I am ${this.age} years old.`;
  }
}

const me = new Person('John', 40);
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
