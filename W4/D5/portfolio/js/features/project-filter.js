function filterProjects(category){
    const cards = document.querySelectorAll("projects-container");
        console.log("Clicked:", category);
        console.log("Cards found:", cards.length);
    cards.forEach(function(card){
    const cardCategory = card.getAttribute("data-category");
        console.log("Card category:", cardCategory);
            let show = false;
                if(category === "all"){
            show = true;
        }
        else if(category === "app" && cardCategory === "mern"){
            show = true;
        }
        else if(cardCategory === category){
            show = true;
        }
        if (show) {
    card.style.display = "block";
} else {
    card.style.display = "none";
}
    });
}
function initFilterButtons(){
    console.log("Init buttons running...");
    document.getElementById("filter-all").addEventListener("click", function(){
        filterProjects("all");
    });
    document.getElementById("filter-web").addEventListener("click", function(){
        filterProjects("web");
    });
    document.getElementById("filter-app").addEventListener("click", function(){
        filterProjects("app");
    });
    document.getElementById("filter-ai").addEventListener("click", function(){
        filterProjects("ai");
    });
}