// Writing custom callback functions
function processStudent(name,score,callback,callback1){ //we can add 1 or more callbacks
    console.log("Student name: ",name);
    console.log("Score:",score);
    callback(name,score);
    callback1(name,score);
}
function showResult(name,score){
    if(score >= 70){
        console.log(name+ " has passed.");
    }
    else{
        console.log(name+ " has failed");
    }
}
function showGrade(name,score){
    if(score >= 85){
        console.log("Grade: A+");
    }
    else if(score >= 75){
        console.log("Grade: A");
    }
    else if(score >= 70){
        console.log("Grade: B");
    }
    else{
        console.log("Grade: Fail");
    }
}

processStudent("varini",85,showResult,showGrade);
// processStudent("varini",85,showGrade);

