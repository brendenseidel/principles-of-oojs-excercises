//'use strict';

// --------------------
// 1. Common Attributes
// --------------------
// Define Object
var ernest = {
  age: 30,
  lastName: "Hemingway",
  married: true,
};

// Set age property to non-enumberable
Object.defineProperty(ernest, "age", {
  enumerable: false
});

// Log enumerability of age property --> false
console.log(ernest.propertyIsEnumerable("age"));

// Log ernest object -- 'age' is not logged
console.log(ernest);

// Set lastName property to non-configurable
Object.defineProperty(ernest, "lastName", {
  configurable: false
});

// Try to delete lastName prop
delete ernest.lastName;

// lastName still logs
console.log(ernest.lastName);


// ---------------------------
// 2. Data Property Attributes 
// ---------------------------

// Create clive object
var clive = {};

// Define lastName property for clive using
// defineProperty method
Object.defineProperty(clive, "lastName", {
  value: "Lewis",
  enumerable: true,
  configurable: true,
  writable: true
});

// Confirm lastName property was created
console.log("Clive's last name is " + clive.lastName);

// Create beatles object
var beatles = {};

// Define 'members' property with defineProperty 
// method but do not specify attribute values
// Result: attributes default to 'false'
Object.defineProperty(beatles, "members", {
  value: ["John", "Paul", "George", "Ringo"]
});

// Confirm existence of 'members' property in
// beatles object
console.log("The 'members' property exists in the 'beatles' object: " + ("members" in beatles)); // true

// Is 'members' enumerable --> false
console.log("Beatles 'members' property is enumerable: " + beatles.propertyIsEnumerable("members")); // false
console.log(beatles); // {}

// Try to delete the 'members' property
delete beatles.members; 
console.log("The 'members' property still exists in the 'beatles' object after trying to delete: " + ("members" in beatles)); // true

// Try to change the value of the 'members' property
beatles.members = "Yoko";
console.log("The beatles members include " + beatles.members.join(', ')); // John, Paul, George, Ringo

// Interestingly, even though the propety is not
// writable, we can still push a value to an array
beatles.members.push("George Martin");
console.log("The beatles members include " + beatles.members.join(', ')); // John, Paul, George, Ringo, George Martin
