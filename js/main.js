// Array of projects
const projects = [
    {
        title: 'peacock' ,
        description: 'A showcase of innovative community using peacocks as examples.' ,
        url: ''
    },

    {
        title: 'peacock' ,
        description: 'A showcase of innovative community using peacocks as examples.' ,
        url: ''
    },

    {
        title: 'food app' ,
        description: 'A food app selling burgers.' ,
        url: 'https://www.figma.com/proto/VVkUBVIBz6nVpdvAWQZB2i/Food-App-Project?page-id=0%3A1&node-id=83-565&starting-point-node-id=1%3A6&t=80obU0lFz5bjO7Yu-1'
    },

    {
        title: 'peacock' ,
        description: 'A showcase of innovative community using peacocks as examples.' ,
        url: ''
    },

    {
        title: 'peacock' ,
        description: 'A showcase of innovative community using peacocks as examples.' ,
        url: ''
    },

    {
        title: 'peacock' ,
        description: 'A showcase of innovative community using peacocks as examples.' ,
        url: ''
    },
];
//Function to load projects
function loadProjects() {
    const projectList = document.getElementById('project-list');
     
    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <iframe src="${project.url}" title="{$project.title}" class="project-iframe"></frame>
        `;

        projectList.appendChild(projectCard);

    });
} 

//Load projects when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);

   