// Feature 6: Category Filter

function initCategoryFilter() {

    const buttons = document.querySelectorAll(".category-btn");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const category = button.getAttribute("data-category");

            let filtered;

            if (category === "all") {
                filtered = projects;
            } else {
                filtered = projects.filter(project =>
                    project.category === category
                );
            }

            renderProjects(filtered);
        });

    });
}