// promise states: pending, fulfilled, rejected
const fulfilledPromise = new Promise(function(resolve){// Resolve & Reject is not a keyword
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        resolve("fulfilledPromise is fulfilled.");
    },1000);
});
const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejectedPromise is pending");

    setTimeout(function(){
        reject("rejectedPromise is rejected.");
    },1500);
});
fulfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
});


