const projects = [
 {
    image: 'IMG-20250729-WA0011',
    projectName: 'Maintainance Of Rehabilitation Of Government Buildings',
    projectLocation: 'Arusha',
    completedYear: '2025',
    projectDescription: 'Maintenance and rehabilitation of government buildings, ensuring proper repairs, renovations, and long-term preservation of public infrastructure.',
    clientName: 'Prime Minister'
 },

 {
    image: 'IMG-20250729-WA0012',
    projectName: 'Construction of Waiting Lounge',
    projectLocation: 'Tarangire National Park',
    completedYear: 'May 2023',
    projectDescription: 'Construction of waiting lounge at kuro Airstrip in Tarangire National Park - TANAPA',
    clientName: 'TANAPA'
 },

 {
    image: 'IMG-20250729-WA0013',
    projectName: "Construction of RC's Conference Hall",
    projectLocation: 'Arusha Region Office',
    completedYear: 'June 2024',
    projectDescription: 'A conference hall for meeting and others',
    clientName: 'RAS - ARUSHA'
 },

 {
    image: 'IMG-20250729-WA0014',
    projectName: 'Office Building',
    projectLocation: 'Arusha',
    completedYear: '2025',
    projectDescription: 'Maintanence of office building of office of the nation assembly clien',
    clientName: 'Prime Minister Office'
 },

 {
    image: 'IMG-20250729-WA0015',
    projectName: 'International Conference Centre',
    projectLocation: 'Arusha at AICC Complex',
    completedYear: '2025',
    projectDescription: 'The Arusha International Conference Centre (AICC) is a leading conference venue in East Africa, located in Arusha, Tanzania. It hosts international, regional, and national meetings, summits, exhibitions, and events, providing modern facilities and professional services.',
    clientName: 'ARUSHA International Conference Centre'
 },

 {
    image: 'IMG-20250729-WA0016',
    projectName: 'UZIKWASA ( Uzima Wa Sanaa ) ',
    projectLocation: 'Arusha',
    completedYear: '2025',
    projectDescription: 'Successfully completed the Uzikwasa (Uzima Kwa Sanaa) project, a community-based initiative that uses art and creativity to promote awareness, education, and positive social change.',
    clientName: 'UZIKWASA'
 },

 {
    image: 'IMG-20250729-WA0017',
    projectName: 'Office Block',
    projectLocation: 'Bozanpangani Tanga',
    completedYear: '2025',
    projectDescription: 'Construction of office block and radio building at bozanpangani pangani Tanga',
    clientName: 'Uzikwasa'
 },

 
 {
    image: 'IMG-20250729-WA0018',
    projectName: 'Construction of waiting lounge',
    projectLocation: 'Kuro Airstrip in Tarangile',
    completedYear: 'in progress',
    projectDescription: 'Construction of a modern waiting lounge at Kuro Airstrip in Tarangire National Park (TANAPA), providing visitors with a comfortable and well-equipped facility while enhancing the overall tourism experience.',
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
        ${project.projectDescription}
    </p>
    <p class="client-name">Client Name: ${project.clientName}</p>
    </div>`;
});