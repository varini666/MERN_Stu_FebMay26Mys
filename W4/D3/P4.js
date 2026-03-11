const jsonOutput = document.getElementById("jsonOutput");
document.getElementById("saveBtn").addEventListener("click",
    function(){
        const user = {
            id:101,
            name:"varini",
            role:"Full stack developer",
            skills:["HTML","CSS"]
        };
        localStorage.setItem("userprofile", JSON.stringify(user));
        jsonOutput.textContent = "user object saved as string to localStorage";
    }
    
);
document.getElementById("readBtn").addEventListener("click",
    function(){
        const up = localStorage.getItem("userprofile");
        console.log(JSON.parse(up));
        console.log(up);
        jsonOutput.textContent = "userprofile" + up;
    });
document.getElementById("readBtn").addEventListener("click",
    function(){
        try{
        const up = localStorage.getItem("userprofile");
        console.log(JSON.parse(up));
        console.log(up);
        jsonOutput.textContent = "userprofile" + up;
    }

catch(error) {
    jsonOutput.textContent = "JSON Parsing failed" ;
}  
    }

);