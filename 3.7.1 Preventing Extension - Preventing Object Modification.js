// ---------------------------
// 3.7.1 Preventing Extensions
// ---------------------------

var painting = {
    title: "Mona Lisa"
};

console.log(Object.isExtensible(painting)); // true

Object.preventExtensions(painting);

console.log(Object.isExtensible(painting)); // false

painting.smile = function (){
    console.log("It's an illusion");
};

console.log("smile" in painting); // false