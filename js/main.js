
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main .section');


document.querySelector('#about').classList.add('active');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);

 
    sections.forEach(section => section.classList.remove('active'));

   
    document.getElementById(targetID).classList.add('active');
  });
});
