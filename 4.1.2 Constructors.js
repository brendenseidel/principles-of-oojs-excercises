// ---------------------
// 4.1.2 Constructors
// ---------------------

function Person(name) {
  this.name = name;
  this.sayName = function () {
    console.log(this.name);
  };
}

var person1 = new Person("Kendrick");
var person2 = new Person("Lou");

console.log(person1.name); // "Kendrick"
console.log(person2.name); // "Lou"

person1.sayName();
person2.sayName();