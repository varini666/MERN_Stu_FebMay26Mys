const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");
asyncFetchBtn.addEventListener("click",
    async function(){
        try{
            const respose = await
            fetch("https://jsonplaceholder.typicode.com/users");
            if(!respose.ok) throw new Error("HTTP error:"+respose.status);
            const users = await respose.json();
            console.log(users);
            const firstThree = users.slice(0,3);
            output.textContent=JSON.stringify(firstThree,null,2);
        }
        catch(error){
            output.textContent="error:"+error.message;
        }
    }
);    