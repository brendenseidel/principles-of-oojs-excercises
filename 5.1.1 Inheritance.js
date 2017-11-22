// -----------------------------------------
// 5.1.1 Inheritance, pgs. 66-68
// - Methods Inherited from Object.prototype
// -----------------------------------------

// ## valueOf() pg. 67 ##
var mountain = {
  elevation: 20310,
  name: "Denali"
};

console.log(mountain.valueOf()); // { elevation: 20310, name: 'Denali' }

// valueOf is called whenever an
// operator is used on an object...
var now = new Date();
var earlier = new Date(2010, 1, 1);

// ...thus, these are doing the same thing
console.log(now.valueOf() > earlier.valueOf()); // true
console.log(now > earlier); // true


// ## toString() pg. 67 ##
// - called whenever valueOf() returns
//   a reference instead of a primitive
// - implicitly called on primitives
//   when JS is expecting a string

console.log("Mountain = " + mountain); // Mountain = [object Object]

// Modifying toString() to return the mountain's name
mountain.toString = function() {
  return "[Mountain: " + this.name + "]";
};

console.log("Mountain = " + mountain); // Mountain = [Mountain Denali]

// ----------------------------------

// these are doing the same thing
console.log("The elevation of " + mountain.name + " is " + mountain.elevation + " feet.");
console.log("The elevation of " + mountain.name + " is " + mountain.elevation.toString() + " feet.");

