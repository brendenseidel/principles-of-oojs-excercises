// ---------------------------
// 3.2 Data Property Attributes 
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