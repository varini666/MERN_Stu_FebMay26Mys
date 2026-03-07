function getRoute(role, isLoggedIn){
    if(!isLoggedIn){
        console.log("/login");
    }
        else {
            console.log("Login");
        }
greet(role);
switch(role){
    case"admin":
    console.log("/admin");
    case"student":
    console.log("/student");
    case"college":
    console.log("/college");
    case"proctor":
    console.log("/proctor");
    default:
        console.log("denied");
        break;
}
}