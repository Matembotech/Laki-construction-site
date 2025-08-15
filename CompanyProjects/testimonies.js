const projects = [
 {
    clientTestimonial: 'Luck Construction exceeded our expectations in every way. Their attention to detail and commitment to deadlines was exceptional. The medical center expansion was completed on time and within budget, with superior quality throughout.',
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },

 {
    clientTestimonial: 'From planning to completion, Luck Construction demonstrated expertise and reliability. Our warehouse facility was built to exact specifications and has served our business perfectly for over two years.',
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },

 {
    clientTestimonial: "We've worked with several construction companies, but Luck Construction stands out for their professionalism and quality. Our 80-unit residential complex in Dar es Salaam was delivered exactly as promised.",
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },

 {
    clientTestimonial: "Our manufacturing facility required specialized knowledge and attention to industrial standards. Luck Construction delivered exactly what we needed - a functional, safe, and efficient production facility",
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },
{
    clientTestimonial: "The administrative complex project was handled with complete professionalism. Luck Construction maintained transparency throughout the process and delivered a modern facility that serves our community well",
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },

 {
    clientTestimonial: "he team was incredibly respectful of our operational needs, working around school hours and ensuring minimal disruption. The new classrooms and laboratory buildings are beautiful and functional",
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },

{
    clientTestimonial: "The renovation of our 50-room hotel was completed in phases, allowing us to maintain operations. The quality of work is outstanding, and our guests consistently compliment the beautiful interiors",
    clientName: 'Client Name',
    clientLocation: 'Arusha',
 },
];

const projectHTML = "";

projects.forEach((project) => {
  document.querySelector(".client-testimonies-section")
   .innerHTML += `<div class="client-section-card">
    <p class="client-emoji">👤</p>
    <p class="client-rating">⭐⭐⭐⭐⭐</p>
    <p class="client-Testimonial">${project.clientTestimonial}</p>
    <hr>
    <p class="client-name">${project.clientName}</p>
    <p class="client-location">${project.clientLocation}</p>
    </div>`;
});