//'use strict';

// Common Attributes

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