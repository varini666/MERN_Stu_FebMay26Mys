// Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >= 70);

console.log(marks);
console.log(passed);

let student = [
    {name:"varini",marks:70},
    {name:"kavya",marks:72},
    {name:"Navya",marks:68}
];
let qulifiedStudent = student.filter(student => student.marks >= 70);
console.log(student);
console.log("qulifiedStudent",qulifiedStudent);
let qulifiedName = qulifiedStudent.map(student => student.name);
console.log("qulifiedName",qulifiedName);
