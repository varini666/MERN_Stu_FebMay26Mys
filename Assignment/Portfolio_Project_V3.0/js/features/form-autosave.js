function initFormAutoSave(){
    const name = document.getElementById("contact-name");

    name.addEventListener("input", ()=>{
    localStorage.setItem("name", name.value);
});

name.value = localStorage.getItem("name") || "";
}