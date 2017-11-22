// ---------------------
// 4.2.3 Prototypes
// ---------------------

function Bicycle (initialSpeed, make) {
  this.speed = initialSpeed;
  this.make = make;
}

Bicycle.prototype = {
  // set constructor to avoid prototype being
  // equal to Object (pg. 59)
  constructor: Bicycle,

  faster: function (speedIncrement) {
    this.speed += speedIncrement;
  },
  printSpeed: function() {
    console.log("The " + this.make + " is going " + this.speed + " mph.");
  }
};

var bike1 = new Bicycle(22, "Cannondale");
var bike2 = new Bicycle(24, "Bianchi");

console.log("slower" in bike1); // false
console.log("slower" in bike2); // false

// We need to slow down
// Add new member to Bicycle.prototype

Bicycle.prototype.slower = function(speedDecrement) {
  this.speed -= speedDecrement;
};

bike1.slower(10);
bike2.slower(14);

bike1.printSpeed(); // The Cannondale is going 12 mph.
bike2.printSpeed(); // The Bianchi is going 10 mph.

// Note: Object.freeze and Object.seal
// only act on the object instance and 
// not on the object's prototype. However,
// if the protoype property is trying to 
// change an instance property it won't
// work
Object.freeze(bike1);
Bicycle.prototype.stop = function() {
  this.speed = 0;
};
Bicycle.prototype.bell = function() {
  console.log("ring ring");
};
//Object.isFrozen(bike1);
bike1.stop(); // doesn't work
bike1.printSpeed(); // 12
bike1.bell(); // "ring ring"