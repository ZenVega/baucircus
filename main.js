let language = 'de';
const projectsButton = document.querySelector('.projectsButton');
const contactButton = document.querySelector('.contactButton');
const aboutButton = document.querySelector('.aboutButton');
const impressumButton = document.querySelector('.impressumButton');
const datenschutzButton = document.querySelector('.datenschutzButton');
const languageSwitch = document.querySelector('.languageSwitch');

const allMainDivs = document.querySelectorAll('main div');
const aboutDiv = document.querySelector('.about');
const contactDiv = document.querySelector('.contact');
const impressumDiv = document.querySelector('.about');
console.log(allMainDivs);

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const logo = document.getElementsByClassName('logo')[0];
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  console.log(navLinks);
      
  burger.addEventListener('click', () => {
      //logo moves
      if(logo.style.animation){
        logo.style.animation = `moveBack 0.5s ease forwards`
      } else {
        logo.style.animation = `moveOut 0.5s ease forwards`;
      }
      //Toggle nav
    nav.classList.toggle('nav-active');
      //animation
    navLinks.forEach((link, index) => {
      console.log(index);
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.5}s`;
      }
      console.log(index/7);
    });
    //burger animation
    burger.classList.toggle('motion');
  });
}

navSlide();

const mainToggle = (obj) => {
  console.log(obj);
  allMainDivs.forEach(div => div.style.display = 'none');
  obj.style.display = 'block';
};
//add eventListeners for buttons
projectsButton.addEventListener('click', (e) => mainToggle(e))


// allMainDivs.forEach(obj => {
//   console.log(obj);
//   obj.addEventListener('click', () => {
//     mainToggle();
//   })
// })

