// ---------------------
// 3.7.2 Sealing Objects
// ---------------------

// Object.seal() --> the [[Extensible]] attribute
// is set to 'false' and all properties have
// [[Configurable]] attribute set to 'false'

var instrument = {
  type: 'Guitar',
  strings: 5,
  needsRestrung: true
};

console.log(Object.isExtensible(instrument)); // true
console.log(Object.isSealed(instrument)); // false

Object.seal(instrument);

console.log(Object.isExtensible(instrument)); // false
console.log(Object.isSealed(instrument)); // true

instrument.changeStrings = function () {
    console.log("Call me Keith Richards.");
}; // fails silently

console.log("changeStrings" in instrument); // false

instrument.type = "Banjo";
console.log(instrument.type); // "Banjo"

delete instrument.needsRestrung;
console.log("needsRestrung" in instrument); // true
console.log(instrument.needsRestrung); // true

var descriptor = Object.getOwnPropertyDescriptor(instrument, "strings");
console.log(descriptor.configurable); //false