const projectsButton = document.querySelector('.projectsButton');
const contactButton = document.querySelector('.contactButton');
const aboutButton = document.querySelector('.aboutButton');

const impressumButton = document.querySelector('.impressumButton');
const datenschutzButton = document.querySelector('.datenschutzButton');
const languageSwitch = document.querySelector('.languageSwitch');

const navButtons = [projectsButton, contactButton, aboutButton, impressumButton, datenschutzButton];

const allMainDivs = document.querySelectorAll('main div');
const aboutDiv = document.querySelector('.about');
const contactDiv = document.querySelector('.contact');
const projectsDiv = document.querySelector('.projects');
const impressumDiv = document.querySelector('.impressum');
const datenschutzDiv = document.querySelector('.datenschutz');





//switch between displayed divs
const mainToggle = (obj) => {
  allMainDivs.forEach(div => div.style.display = 'none');

  switch (obj.target) {
    case aboutButton:
      aboutDiv.style.display = 'block';
      break; 
    case contactButton:
      contactDiv.style.display = 'block';
      break;
    case projectsButton:
      projectsDiv.style.display = 'block';
      break;
    case impressumButton:
      impressumDiv.style.display = 'block';
      break;
    case datenschutzButton:
      datenschutzDiv.style.display = 'block';
      break;
  };
}

//add eventListeners for buttons
navButtons.forEach(button => {
  button.addEventListener('click', (e) => mainToggle(e))
})

