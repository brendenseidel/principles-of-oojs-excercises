// ---------------------
// 4.1.3 Constructors
// ---------------------

function Person(name) {
  Object.defineProperty(this, "name", {
    get: function() {
      return name;
    },
    set: function(newName) {
      this.name = newName;
    },
    enumerable: true,
    configurable: true
  });

  this.sayName = function() {
    console.log(this.name);
  };
}

// When you forget to use 'new',
// 'this' is assigned to the global
// object

var person1 = Person("Sylvester");

console.log(person1 instanceof Person); //false
console.log(typeof person1); // undefined
console.log(name); // Sylvester
