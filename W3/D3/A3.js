//Report
const report={
    "app":"portal",
    "status":"OK",
    "modules":{
        "auth":"ok",
        "payment":"ok",
        "result":"fail",
        "profile":"ok"
    }
}
let okcount=0;
let failcount=0;
greet(key);
for(let key in report.modules){
    console.log(report.modules[key])
}
if(report.modules[key]==="ok"){
    okcount++;
}
else if(report.modules[key]==="fail"){
failcount++;
}
console.log(okcount);
console.log(failcount);