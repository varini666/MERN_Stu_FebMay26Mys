// innerText & textContent
// innerText: visible rendered text only 
// textContent: all text nodes regardless of CSS
// innerHTML: allows reading or writing

const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
document.getElementById("innerTxtBtn").addEventListener(
    "click",function(){
        message.innerText = "Updated using innerText";
});

document.getElementById("textContentBtn").addEventListener(
    "click",function(){
        message.innerText = "Updated using textContent";
});

document.getElementById("reset").addEventListener(
    "click",function(){
        message.innerText = "Original Message";
});

const box =document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener(
    "click",function(){
        box.innerHTML = "<strong>Original</strong> Content";
});






































