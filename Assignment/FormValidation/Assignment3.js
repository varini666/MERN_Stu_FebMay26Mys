submitBtn.addEventListener("click", function(event){

event.preventDefault();

let name = nameInput.value.trim();
let email = emailInput.value.trim();
let type = typeInput.value;
let feedback = feedbackInput.value.trim();

error.textContent = "";

if(!name || !email || !type || !feedback){
error.textContent = "All fields are required";
return;
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
error.textContent = "Enter valid email";
return;
}

if(feedback.length < 20){
error.textContent = "Feedback must be at least 20 characters";
return;
}

let label = "";

if(type === "Bug") label = "[Needs Review]";
else if(type === "Suggestion") label = "[Idea]";
else if(type === "Appreciation") label = "[Positive]";

let card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3></h3>
<p class="email"></p>
<p class="type"></p>
<p class="text"></p>
<button class="delete">Delete</button>
`;

card.querySelector("h3").textContent = name;
card.querySelector(".email").textContent = "Email: " + email;
card.querySelector(".type").textContent = "Type: " + type + " " + label;
card.querySelector(".text").textContent = feedback;

card.querySelector(".delete").addEventListener("click", function(){
card.remove();
count--;
countDisplay.textContent = count;
});

container.appendChild(card);

count++;
countDisplay.textContent = count;

nameInput.value = "";
emailInput.value = "";
feedbackInput.value = "";
typeInput.selectedIndex = 0;

});