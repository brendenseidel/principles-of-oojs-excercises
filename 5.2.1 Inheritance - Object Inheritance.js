// -------------------------------------------
// 5.2.1 Inheritance, pgs. 69-72
// - Object Inheritance: using Object.create()
// -------------------------------------------

// These create the same object
var soccerClub = {
  name: "Crew SC"
};

console.log(soccerClub.name); // Crew SC

var soccerClub = Object.create(Object.prototype, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Crew SC",
    writable: true
  }
});

console.log(soccerClub.name); // Crew SC


//----------------------------------

var automaker1 = {
  name: "General Motors",
  headquarters: "Detroit, MI"
};

var automaker2 = Object.create(automaker1, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Chevrolet",
    writable: true
  }
});

console.log(automaker1.name); // General Motors
console.log(automaker2.name); // Chevrolet
console.log(automaker1.headquarters); // Detroit, MI
console.log(automaker2.headquarters); // Detroit, MI
console.log(automaker1.hasOwnProperty("headquarters")); // true
console.log(automaker1.isPrototypeOf(automaker2)); // true
console.log(automaker2.hasOwnProperty("headquarters")); // false