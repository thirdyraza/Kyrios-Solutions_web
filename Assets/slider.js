//Testimonial Data
const testimonials = [
  {
    name: "Project Management",
    job: "Successfully plan, execute, and deliver projects on time and within budget. We understand your specific project needs and objectives, and we develop customized project plans and timelines that we know will align with the your goals.",
    image: "Pictures/project.png",
    
  },
  {
    name: "Computer and Supplies",
    job: "Run computer systems effectively with the right hardware and accessories. The quality and reliability of the computer and supplies are our topmost priority, because we believe it plays a vital part towards your satisfaction and success.",
    image: "Pictures/supplies.png",
    
  },
  {
    name: "Consulting Services",
    job: "Improve performance, increase efficiency, reduce costs, enhance organizational structure, or implement new initiatives. We deliver value to our clients, expert advice, and guidance that can help you achieve your goals and objectives.",
    image: "Pictures/consult.png",
    
  },
  {
    name: "Software and Information Technology",
    job: "Use technologies to optimize operations, improve productivity, and enhance customer satisfaction. We can help you in designing, developing, implementing, and maintaining your software applications and IT infrastructure.",
    image: "Pictures/software.png",
    
  },
  {
    name: "Training and Development",
    job: "Improve knowledge, skills, and competencies to achieve goals and objectives. To enhance the capabilities of individuals and organizations, promote continuous learning and development, and support the achievement of strategic goals and objectives.",
    image: "Pictures/training.png",
    
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;