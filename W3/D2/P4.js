//Condition statements

let age = 20;
if(age < 13){
        console.log("Child");
}
else if(age < 18){
    console.log("Teenage");
}
else{
    console.log("Adult");
}

//Switch statements(works for number, character)
console.log("Switch statements");
let day = "Monday";
switch (day){
    case"Monday":
    console.log("Start of the week");
    break;
    case"Wednesday":
    console.log("Mid of the week");
    break;
    case"Friday":
    console.log("End of Work week");
    break;
    default:
        console.log("Some day in the week");
        break;
}
//Type Conversion
let n = Number("ABC");
console.log("n: ",n,"Type of n:", typeof n, "isNaN",isNaN(n));