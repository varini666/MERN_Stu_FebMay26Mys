// Introduction to callback function
function greetUser(name,Callback){
    console.log("Hello,"+name);
// The callback function is executed only after the execution of the current function
    Callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}

greetUser("varini",showCompletionMessage);