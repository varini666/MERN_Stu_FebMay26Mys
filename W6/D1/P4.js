// Usage of built-in and third-party modules
// path is a build-in module, so it works without installation
const path = require("path");

const invoicePath = path.join("invoices","2026","invoice_001.txt");
console.log("Built-in module result: ",invoicePath);

// To use third-party package/module
try{
    const_ = require("lodash");
    console.log("Third-party modules example");
}
catch(e){
    console.log("Third party module 'lodash' is not installed.")
}