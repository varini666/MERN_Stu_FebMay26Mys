// json stringify & parse
const employee = {
    id:101,
    name:"sandeep",
    dept:"ME",
    isActive:true
};
console.log(employee);

//stringify(js-json)
const jsonString = JSON.stringify(employee);
console.log(jsonString);

//parse(json-js)
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);