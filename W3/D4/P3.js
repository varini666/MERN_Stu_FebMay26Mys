// Array map
let numbers= [1,2,3,4];
let squared = numbers.map(num => num*num);
console.log(squared);

let prices = [100,200,300,400];
let priceWithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax:",prices);
console.log("price with tax:",priceWithGST);

// Using map to extract files
let users = [
    {name:"varini",age:21},
    {name:"kavya",age:24}
];
let names = users.map(user => user.name);//extract individual value from array
console.log(names);
