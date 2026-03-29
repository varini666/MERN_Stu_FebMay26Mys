function initScrollSpy(){
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        if(window.scrollY >= sec.offsetTop - 100){
        current = sec.id;
    }
    });

    links.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href").includes(current)){
        link.classList.add("active");
    }
    });
});
}