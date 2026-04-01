// Feature 12: Recently Viewed Projects

function saveRecentProject(project) {

    let recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

    // avoid duplicates
    const exists = recent.some(p => p.name === project.name);

    if (!exists) {
        recent.push(project);
    }

    localStorage.setItem("recentProjects", JSON.stringify(recent));

    renderRecentProjects();
}


function renderRecentProjects() {

    const container = document.getElementById("recent-projects");

    if (!container) return;

    const recent = JSON.parse(localStorage.getItem("recentProjects")) || [];

    container.innerHTML = "";

    recent.forEach(project => {

        const div = document.createElement("div");

        div.textContent = project.name;

        container.appendChild(div);
    });
}


// initialize
function initRecentlyViewed() {
    renderRecentProjects();
}