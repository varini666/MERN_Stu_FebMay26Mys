// Array basics
console.log("Array basics");
// creating arrays
let emptyArray = [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"varini"},[6,5]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//using constructor
let fruits = new Array("Apple","Berry","Cherry");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

// Push : add
fruits.push("Grapes");
console.log(fruits);

// Pop : remove
fruits.pop();
console.log(fruits);

//unshift : adds to the beginning
fruits.unshift("orange");
console.log(fruits);

// shift : remove from beginning
fruits.shift();
console.log(fruits);
