// let language = 'de';
// let projectsButton = document.getElementsByClassName

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const logo = document.getElementsByClassName('logo')[0];
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
      
  burger.addEventListener('click', () => {
      //logo moves
      if(logo.style.animation){
        logo.style.animation = ''
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


