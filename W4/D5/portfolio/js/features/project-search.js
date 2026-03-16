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

        const buttonContainer = document.createElement("div");
buttonContainer.className = "flex justify-center gap-4 mt-4";

const liveBtn = document.createElement("a");
liveBtn.href = projects.liveLink;
liveBtn.textContent = "Live Demo";
liveBtn.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-800";

const githubBtn = document.createElement("a");
githubBtn.href = projects.githubLink;
githubBtn.textContent = "GitHub";
githubBtn.className = "bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600";

        card.appendChild(projectsName);
        card.appendChild(projectsCategory);
        card.appendChild(projectsDescription);
        card.appendChild(projectsTechnologies);
        card.appendChild(liveBtn);
        card.appendChild(githubBtn);


        projectsContainer.appendChild(card);

    });

    console.log("Projects rendered succesfully");
}