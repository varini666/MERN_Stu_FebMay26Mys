// Reduce method
let nums = [5,10,15];

let total = nums.reduce((intermediate,current) => intermediate+current,0);//0 is initial value
console.log(total);
console.log(total/nums.length);//Average

// /Reduce to object count by category
let items = ["pen","pencil","pen","eraser"];
let count = items.reduce((intermediatevalue,item)=>{
    intermediatevalue[item] = (intermediatevalue[item] || 0) + 1;
    return intermediatevalue;
},{});
console.log("Item count:",count);