// Basic callback variations
// 1. a callback with no input data
// 2. a callback that receives data from main function

function runTask(callback){ // callback is not keyword we can use any other name
    console.log("Task is running.");
    callback();
}

function runTaskWithResult(taskName,callback){
    console.log("Processing task:",taskName);
    callback("Task"+taskName+"finished successfully.");
}

function showSimpleDoneMessage(){
    console.log("simple callback executed");
}

function showDetailedMessage(message){
    console.log(message);
}

// runTask(showSimpleDoneMessage)
runTaskWithResult("send monthly report",showDetailedMessage)