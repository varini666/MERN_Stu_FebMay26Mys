// Permission rules
let Permission = [
        { role: "admin", action: "WRITE", allowed: true },
        { role: "student" , action: "READ" , allowed: false },
        { role: "guest", action: "READ" , allowed: false }
];
console.log(Permission);
let rules = Permission.filter(Permission=> Permission.allowed===true);
console.log(rules);
let allowedPairs = Permission.map(Permission=> ({Role:Permission.role,action:Permission.action}));
console.log(allowedPairs);
let summaryObject = rules.reduce((rules,allowedPairs)=>{
    rules[allowedPairs] = (rules[allowedPairs] || 0);
return rules;},{});
console.log(summaryObject);