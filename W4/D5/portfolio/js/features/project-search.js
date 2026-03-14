function initProjectSearch(){
    const projectsContainer = document.getElementById("project-filters");

    if(!projectsContainer){
        console.log("Project is not found");
        return;
    }
    projectsContainer.innerHTML=" ";
    projectsData.forEach(function(projects){

        const card = document.createElement("div");
        card.className = "p-8 text-center bg-blue-100 rounded-3xl shadow-lg";

        const iconText = document.createElement("span");
        iconText.className = "text-2xl text-white font-bold";
        iconText.textContent = projects.shortLabel;

        const projectsName = document.createElement("h3");
        projectsName.className = "text-xl font-bold mb-2";
        projectsName.textContent = projects.name;

        const projectsCategory = document.createElement("p");
        projectsCategory.className = "text-md font-bold ";
        projectsCategory.textContent = projects.category;

        const projectsDescription = document.createElement("p");
        projectsDescription.className = "text-sm ";
        projectsDescription.textContent = projects.description;

        const projectsTechnologies = document.createElement("p");
        projectsTechnologies.className = "text-sm ";
        projectsTechnologies.textContent = projects.technologies;

        card.appendChild(projectsName);
        card.appendChild(projectsCategory);
        card.appendChild(projectsDescription);
        card.appendChild(projectsTechnologies);

        projectsContainer.appendChild(card);

    });

    console.log("Projects rendered succesfully");
}