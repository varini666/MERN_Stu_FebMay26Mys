// Logging
console.log("Console logging");

console.warn("Warning message");

console.error("Error message");

let users = [
    {id:1,name:"Amith",age:12},
    {id:2,name:"John",age:21}
];
console.log(users);
console.table(users);

// Group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.log("Log 4");
console.groupEnd();

// measure execution time
console.time("LoopTimer");
for(let i=0; i<1000; i++){}
    console.timeEnd("LoopTimer");
