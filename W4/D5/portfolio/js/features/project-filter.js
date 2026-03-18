const filteredProjects = projectsData.filter(project => {

    const matchesSearch =
        project.name.toLowerCase().includes(keyword) ||
        project.technologies.toLowerCase().includes(keyword);

    const matchesCategory =
        selectedCategory === "All" ||
        project.category === selectedCategory;

    return matchesSearch && matchesCategory;
});