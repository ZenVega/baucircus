const navSlide = () => {
  const burger = document.querySelector('.burger');
  const logo = document.querySelector('.logo');
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