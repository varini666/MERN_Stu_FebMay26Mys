function initProjectFilter(){
    const filters = ["All","Frontend","Backend"];

    const container = document.getElementById("project-filters");

    filters.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;

    btn.onclick = () => {
    const filtered = cat === "All"
        ? projectsData
        : projectsData.filter(p => p.category === cat);

    renderProjects(filtered);
    updateProjectCount(filtered.length);
    };

    container.appendChild(btn);
});
}