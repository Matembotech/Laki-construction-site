const projects = [
 {
    image: 'IMG-20250729-WA0011',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0012',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0013',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0014',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0015',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0016',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'IMG-20250729-WA0017',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 
 {
    image: 'IMG-20250729-WA0018',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

  {
    image: 'project-commercial',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'project-residential',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },

 {
    image: 'project-road',
    projectName: 'Project Name',
    projectLocation: 'Arusha',
    completedYear: '2025',
    clientName: 'matembo'
 },
];

const projectHTML = "";

projects.forEach((project) => {
  document.querySelector(".project-section")
   .innerHTML += `<div class="projectsection-card">
    <img src="image/projects/${project.image}.jpg" alt="laki-project">
    <p class="project-name">${project.projectName}</p>
    <p class="project-location">📍${project.projectLocation}</p>
    <p class="project-time">📅 Completed ${project.completedYear}</p>
    <p class="project-description">
        Modern 120-unit residential complex with contemporary amenities including 
        parking, gardens, and security systems
    </p>
    <p class="client-name">Client Name: ${project.clientName}</p>
    <a class="project-button" href="#">View Details &rightarrow;</a>
    </div>`;
});