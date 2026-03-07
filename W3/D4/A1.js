let employee = [
    { name: "Asha", basePay: 30000, bonus: 200, taxRate: 0.10},
    { name: "Banu", basePay: 0, bonus: 0, taxRate: 0.10 },
    { name: "Chaithra", basePay: 20000, bonus: -1, taxRate: 0.3 },
    { name: "Deepu", basePay: 30000, bonus: 200, taxRate: 2 }
]
let basePay = employee.filter(employee => employee.basePay > 0);
console.log(basePay);
let bonus = employee.filter(employee => employee.bonus >= 0);
console.log(bonus);
let taxRate = employee.filter(employee => employee.taxRate <1 );
console.log(taxRate);
let netPayReport = employee.map(employee => {
    let gross=employee.basePay+employee.bonus;
    let netPay=gross-(gross*taxRate);
return {
    name: employee.name,
    netPay: netPay
};
});

console.log(netPayReport);
let totalNetPayout = netPayReport.reduce((total, employee) => {
return total + employee.netPay;
}, 0);

console.log(totalNetPayout);

