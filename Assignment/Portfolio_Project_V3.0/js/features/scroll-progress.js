function initScrollProgress(){
    const bar = document.getElementById("scroll-bar");

    window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / height) * 100 + "%";
});
}