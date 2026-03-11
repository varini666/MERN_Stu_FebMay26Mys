const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");
introBtn.addEventListener("click",
    function(){
        output.textContent="Sending request..";
        fetch("https://jsonplaceholder.typicode.com/posts/27")// /27 indicates the id no in the url
        .then(function(response){
            return response.json();
        })
        .then(function (data){                          // then will work as try block
            console.log("Raw response object: ",data);
            // output.textContent = "Status: " +response.status+ "\nOK:"+     //Http status code starting from 200
            // response.ok;
            output.textContent = JSON.stringify(data,null,2);
        })
        .catch(function(error){
            output.textContent = "Unexpected fetch error: "+error.message;
        });
    }
);

