// Why use Async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"kiran"});
        },1000);
    });
}

function getOrders(userID){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },12000);
    });
}

async function showUserAndUsers(){
    const user = await getUser();
    console.log("User loaded:",user.name); //.name is to get the name of the user

    const orders = await getOrders(user.id);
    console.log("Orders loaded",orders);
}

showUserAndUsers();