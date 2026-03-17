// chaining promises with returned promises
function getOrderID(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);//without this orderID no other details of product can be fetched(that is why it it returned)
        },500);
    });
}
function getOrderDetails(orderID){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderID,
                product:"Laptop",
                quantity:2
            },700);
        });
    })
}
getOrderID()
.then(function(orderID){
    console.log("Order Id received: ",orderID);
    return getOrderDetails(orderID);
})
.then(function(OrderDetails){
    console.log("Order details loaded.");
    console.log("Product:",OrderDetails.product);
    console.log("Quantity:",OrderDetails.quantity);

})