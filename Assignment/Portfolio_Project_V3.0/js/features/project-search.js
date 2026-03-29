function initProjectSearch(){
    const input = document.getElementById("project-search");

input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();

    const filtered = projectsData.filter(p => p.name.toLowerCase().includes(keyword));

    renderProjects(filtered);
    updateProjectCount(filtered.length);
});
}