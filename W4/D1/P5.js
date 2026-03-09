// Breakpoint
// Inspect the variable values
// views the call stack
// step through code line by line
// Evaluate expression in the console
// watch how variables change during the execution
// To find logical errors
function calculateTotal(prices){
    let total=0;
    for(let i=0;i<prices.length;i++)
        {
            let price = prices[i];
            debugger;
            total +=price;
        }
        return total;
}
let cart=[100,250,150,1000,220];
calculateTotal(cart);
console.log("Total:",calculateTotal(cart));