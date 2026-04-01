// Feature 3: Back to Top Button

function initBackToTop() {

    const button = document.getElementById("back-to-top");

    if (!button) return;

    // Show / Hide button on scroll
    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }

    });

    // Scroll to top when clicked
    button.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}