function initProjectSort(){
    document.getElementById("project-sort").addEventListener("change", e => {

    const sorted = [...projectsData].sort((a,b)=>a.name.localeCompare(b.name)
    );

    renderProjects(sorted);
});
}