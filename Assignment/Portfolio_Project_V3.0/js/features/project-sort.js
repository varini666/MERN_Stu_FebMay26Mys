// Feature 7: Project Sorting

function initProjectSort() {

    const select = document.getElementById("sort-select");

    if (!select) return;

    select.addEventListener("change", function () {

        let sorted = [...projects]; // copy array

        if (select.value === "az") {
            sorted.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }

        if (select.value === "za") {
            sorted.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        renderProjects(sorted);
    });
}