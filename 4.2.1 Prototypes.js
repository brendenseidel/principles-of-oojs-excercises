// ---------------------
// 4.2.1 Prototypes
// ---------------------

var book = {
  title: "The Old Man and the Sea"
};

console.log("1: " + ("title" in book)); // true
console.log("2: " + book.hasOwnProperty("title")); // true
console.log("3: " + ("hasOwnProperty" in book)); // false
console.log("4: " + book.hasOwnProperty("hasOwnProperty")); // true
console.log("5: " + Object.prototype.hasOwnProperty("hasOwnProperty")); // true

console.log("6: " + book.__proto__); // {}

var object = {};

var prototype = Object.getPrototypeOf(object);

console.log("7: " + (prototype === Object.prototype)); // true

console.log("8: " + object.toString()) // [object Object]

object.toString = function() {
  return "[object Custom]";
}

console.log("9: " + object.toString()); // [object Custom]

// delete own property
delete object.toString;
console.log("10: " + object.toString()) // [object Object]

// no effect - delete only works on own properties
delete object.toString;
console.log("11: " + object.toString()) // [object Object]