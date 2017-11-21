// ---------------------
// 4.2.2 Prototypes
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

var bike1 = new Bicycle(5, "Cannondale");
var bike2 = new Bicycle(6, "Bianchi");

bike1.printSpeed(); // The Cannondale is going 5 mph.
bike2.printSpeed(); // The Bianchi is going 6 mph.

bike1.faster(7);
bike2.faster(4);

bike1.printSpeed(); // The Cannondale is going 12 mph.
bike2.printSpeed(); // The Bianchi is going 10 mph.


// Be careful when using reference values
// on the prototype - see below.
Bicycle.prototype.models = [];

bike1.models.push("CAADX");
bike2.models.push("Intrepida");

console.log(bike1.models); // [ 'CAADX', 'Inrepida' ]
console.log(bike2.models); // [ 'CAADX', 'Inrepida' ]


