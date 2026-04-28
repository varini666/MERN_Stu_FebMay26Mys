function initBackToTop(){
    const topBtn = document.getElementById("back-to-top");
    if(!topBtn){
        console.log("Back to top button not found");
        return;
    }

    // Show / hide button on scroll
    window.addEventListener("scroll", function(){
        if(window.scrollY > 300){
            topBtn.classList.remove("hidden");
        } else {
            topBtn.classList.add("hidden");
        }
    });

    // Scroll to top
    topBtn.addEventListener("click", function(){
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        });
    });

    console.log("Back to top initialized");
}
