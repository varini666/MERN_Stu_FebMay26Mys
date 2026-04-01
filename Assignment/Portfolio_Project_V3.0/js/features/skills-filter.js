// Feature 10: Skills Filter

function initSkillsFilter() {

    const buttons = document.querySelectorAll(".filter-btn");

    if (!buttons.length) return;

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const category = button.getAttribute("data-category");

            let filtered;

            if (category === "all") {
                filtered = skills;
            } else {
                filtered = skills.filter(skill =>
                    skill.category === category
                );
            }

            renderSkills(filtered);
        });

    });
}