const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");
introBtn.addEventListener("click",
    function(){
        output.textContent="Sending request..";
        fetch("https://jsonplaceholder.typicode.com/posts/27")// /27 indicates the id no in the url
        .then(function(response){                             // response is a user defined key word & also data
            return response.text();
        })
        .then(function (text){                          // then will work as try block
            console.log("Text response object: ",text);
            // output.textContent = "Status: " +response.status+ "\nOK:"+     //Http status code starting from 200
            // response.ok;
            output.textContent = text;
        })
        .catch(function(error){
            output.textContent = "Unexpected fetch error: "+error.message;
        });
    }
);

