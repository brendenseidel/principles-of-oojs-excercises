// ---------------------
// 4.1.1 Constructors
// ---------------------

function Person() {
  // initially empty
}

var person1 = new Person();
var person2 = new Person();

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true