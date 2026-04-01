// Feature 4: Project Search (Live Filtering)

function initProjectSearch() {

    const input = document.getElementById("search-input");

    if (!input) return;

    input.addEventListener("input", function () {

        const searchText = input.value.toLowerCase();

        const filtered = projects.filter(project =>
            project.name.toLowerCase().includes(searchText)
        );

        renderProjects(filtered);
    });
}