//Nested objects
const student ={
    firstName:"santhosh",
    lastName:"sharma",
    scores:{
        math: 80,
        science: 83
    },
    hobbies:["reading","singing"],
    fullname: function(){
        return this.firstName +" "+this.lastName;
    },
    greet(){
        console.log("Hi,",this.fullname());
    },
};
// console.log("student",student);
// console.log(student.scores.math);
// console.log(student.scores.science);
console.log(student.fullname());
console.log(student.greet());


