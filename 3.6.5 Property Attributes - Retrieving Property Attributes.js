// ------------------------------------
// 3.6.5 Retrieving Property Attributes
// ------------------------------------

var france = {
    capital: "Paris",
    romantic: true,
    knownFor: ["le fromage", "wine", "des chats", "tour de france", "cafes"]
};

capitalPropertyAttribute = Object.getOwnPropertyDescriptor(france, "capital");

console.log(capitalPropertyAttribute);
// { value: 'Paris', writable: true, enumerable: true, configurable: true }

console.log(capitalPropertyAttribute.value); //'Paris'
console.log(capitalPropertyAttribute.writable); //true
console.log(capitalPropertyAttribute.enumerable); //true
console.log(capitalPropertyAttribute.configurable); //true