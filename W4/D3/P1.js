const checkBtn = document.getElementById("checkBtn");
checkBtn.addEventListener("click",
    function(){
        console.log("Local storage check",typeof localStorage !=="undefined");//checking if the domain is already having the local storage
        console.log("Session storage check",typeof localStorage !=="undefined");
        console.log("localStorage object",localStorage);
        console.log("sessionStorage object",sessionStorage);

    }
);