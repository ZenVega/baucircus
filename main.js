const projectsButton = document.querySelector('.projectsButton');
const contactButton = document.querySelector('.contactButton');
const aboutButton = document.querySelector('.aboutButton');

const impressumButton = document.querySelector('.impressumButton');
const datenschutzButton = document.querySelector('.datenschutzButton');

const navButtons = [projectsButton, contactButton, aboutButton, impressumButton, datenschutzButton];

const allMainDivs = document.querySelectorAll('main div');
const aboutDiv = document.querySelector('.about');
const contactDiv = document.querySelector('.contact');
const projectsDiv = document.querySelector('.projects');
const impressumDiv = document.querySelector('.impressum');
const datenschutzDiv = document.querySelector('.datenschutz');
//console.log(allMainDivs);

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const logo = document.getElementsByClassName('logo')[0];
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
      
  burger.addEventListener('click', () => {
      //logo moves
      if(logo.style.animation === '0.5s ease 0s 1 normal forwards running moveOut'){
        logo.style.animation = `moveBack 0.5s ease forwards`;
      } else if(!logo.style.animation || logo.style.animation == '0.5s ease 0s 1 normal forwards running moveBack'){
        logo.style.animation = `moveOut 0.5s ease forwards`;
      }
      //Toggle nav
    nav.classList.toggle('nav-active');
      //animation
    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
      }
    });
    //burger animation
    burger.classList.toggle('motion');
  });
}

navSlide();
//switch between displayed divs
const mainToggle = (obj) => {
  let bold = document.querySelector('.bold');
  bold.classList.remove('bold')


  switch (obj.target) {
    case aboutButton:
      aboutDiv.style.display = 'block';
      aboutButton.classList.add('bold');
      break; 
    case contactButton:
      contactDiv.style.display = 'block';
      contactButton.classList.add('bold');
      break;
    case projectsButton:
      projectsDiv.style.display = 'block';
      projectsButton.classList.add('bold');
      break;
    case impressumButton:
      impressumDiv.style.display = 'block';
      impressumButton.classList.add('bold');
      break;
    case datenschutzButton:
      datenschutzDiv.style.display = 'block';
      datenschutzButton.classList.add('bold');
      break;
  };
}

//add eventListeners for buttons
navButtons.forEach(button => {
  button.addEventListener('click', (e) => mainToggle(e))
})

