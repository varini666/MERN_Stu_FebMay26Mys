// Reading & writing files synchronously

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"sync-note.txt");

// syntax for function usage in a module
// ModuleName.functionName()

fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block execution");// first parameter is filepath and second is the text to be written in the file

console.log("File written synchronously");

const content = fs.readFileSync(filePath,"utf-8");


console.log("File read synchronously.")
console.log(content);