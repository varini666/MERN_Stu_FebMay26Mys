function renderProjects(data) {

    const container = document.getElementById("projects-container");
    const countText = document.getElementById("result-count");

    container.innerHTML = "";

    data.forEach(project => {

        const div = document.createElement("div");
        div.className = "project-card";

        div.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <button class="view-btn">View</button>
        `;

        // SAVE when clicked
        div.querySelector(".view-btn").addEventListener("click", function () {
            saveRecentProject(project);
        });

        container.appendChild(div);
    });

    countText.textContent = data.length + " projects found";
}