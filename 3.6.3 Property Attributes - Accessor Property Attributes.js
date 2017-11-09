// --------------------------------
// 3.3 Accessor Property Attributes
// --------------------------------

var person1 = {
  _firstName: "Virginia",
  _lastName: "Woolf"
};

Object.defineProperty(person1, "lastName", {
  get: function () {
    console.log("Reading Last Name");
    console.log(this._firstName + "'s last name is " + this._lastName);
  },
  set: function (value) {
    console.log("Setting " + this._firstName + "'s last name to %s", value);
    this._lastName = value;
  },
  enumerable: true,
  configurable: true
});

person1.lastName;

person1.lastName = "Tech";



//--//--//--//--//--//--//--//--//--//--//--//

// Creat an object that does not set
// configurable and enumerable to true.
// The result is that we lock down what
// those accessors can do.

var person2 = {
  _firstName: "James",
  _lastName: "Joyce"
};

Object.defineProperty(person2, "lastName", {
  get: function () {
    console.log("Reading Last Name");
    console.log(this._firstName + "'s last name is %s", this._lastName);
  }
});

console.log("lastName" in person2); // true
console.log(person2.propertyIsEnumerable("lastName")); // false

delete person2.lastName;
person2.lastName; // James's last name is Joyce