// Render Skills

function renderSkills(data) {

    const container = document.getElementById("skills-container");

    container.innerHTML = "";

    data.forEach(skill => {

        const div = document.createElement("div");

        div.textContent = skill.name;

        container.appendChild(div);
    });
}