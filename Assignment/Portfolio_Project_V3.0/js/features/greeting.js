function initGreeting(){
    const hour = new Date().getHours();
    let text = "Hello";

    if(hour < 12) text="Good Morning";
    else if(hour < 18) text="Good Afternoon";
    else text="Good Evening";

    document.getElementById("greeting").textContent = text;
}