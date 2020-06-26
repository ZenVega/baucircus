const projectsButton = document.querySelector('.projectsButton');
const contactButton = document.querySelector('.contactButton');
const aboutButton = document.querySelector('.aboutButton');

const impressumButton = document.querySelector('.impressumButton');
const datenschutzButton = document.querySelector('.datenschutzButton');

const navButtons = [projectsButton, contactButton, aboutButton, impressumButton, datenschutzButton];

const allMainDivs = document.querySelectorAll('.main');
const aboutDiv = document.querySelector('.about');
const contactDiv = document.querySelector('.contact');
const projectsDiv = document.querySelector('.projects');
const impressumDiv = document.querySelector('.impressum');
const datenschutzDiv = document.querySelector('.datenschutz');

//switch between displayed divs
const mainToggle = (obj) => {
  allMainDivs.forEach(div => div.style.display = 'none');
  let bold = document.querySelector('.bold');
  bold.classList.remove('bold');


  switch (obj.target) {
    case aboutButton:
      aboutDiv.style.display = 'flex';
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

