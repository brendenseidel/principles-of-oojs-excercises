// ----------------------------------
// 3.6.4 Defining Multiple Properties
// ----------------------------------

var person1 = {};

Object.defineProperties(person1, {
  _name: {
    value: "Bob Dylan",
    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    get: function(){
      console.log("Reading Value");
      console.log(this._name);
    },
    set: function(value) {
      console.log("Changing name to %s", value);
      this._name = value;
    },
    enumerable: true,
    configurable: true
  }
});

person1.name; // Reading Value /n Bob Dylan

person1.name = "Jack Frost"; // Changing name to Jack Frost