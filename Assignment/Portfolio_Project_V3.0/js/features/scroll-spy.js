// Feature 2: Scroll Spy (Active Nav Highlight)

function initScrollSpy() {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
            let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 100;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("text-blue-500");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("text-blue-500");
            }

        });

    });
}