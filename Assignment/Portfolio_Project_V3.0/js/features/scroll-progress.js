function initScrollProgress() {

    const progressBar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", function () {

        console.log("scrolling..."); 

        const scrollTop = window.scrollY;
        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const percentage = (scrollTop / totalHeight) * 100;

        progressBar.style.width = percentage + "%";
    });
}