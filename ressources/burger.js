const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  const logoP2 = document.getElementById('two');
  const logoP3 = document.getElementById('three');
  const logoP4 = document.getElementById('four');

  let isBurgerOpen = false;
      
  burger.addEventListener('click', () => {
      //logo moves
      if(isBurgerOpen){
        logoP2.style.animation = `moveBack 0.5s ease-in forwards`;  
        logoP4.style.animation = `moveUp 0.5s ease-in 0.3s forwards`;
        logoP3.style.animation = `fadeIn 0.3s ease-in 0.5s forwards`;
        isBurgerOpen = false;

      } else if(!isBurgerOpen){
        logoP3.style.animation = `fadeOut 0.3s ease-in forwards`;
        logoP2.style.animation = `moveOut 0.5s ease-in 0.3s forwards`;
        logoP4.style.animation = `moveDown 0.5s ease-in 0.5s forwards`;
        isBurgerOpen = true;
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