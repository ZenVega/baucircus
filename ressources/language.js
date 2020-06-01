let language = 'de';
const languageswitch = document.querySelector('.languageSwitch');

const loadProjects = async(url) => {
  const response = await fetch(url);
  return response.json()
}

const toggleLanguage = (input) => {
  const aboutText = document.querySelector('.aboutText');
  const impressumText = document.querySelector('.impressumText')
  //const contactText = document.querySelector('.contactText');
  // const projectsDiv = document.querySelector('.projects');
  // const impressumDiv = document.querySelector('.about');
  // const datenschutzDiv = document.querySelector('.datenschutz');

  if(language === 'de'){
    aboutText.innerHTML  = input.languages.eng.about;
    impressumText.innerHTML  = input.languages.eng.impressum;
    language = "eng";
  } else {
    aboutText.innerHTML  = input.languages.de.about;
    impressumText.innerHTML  = input.languages.de.impressum;
    language = "de";
  }
};

switchFunction = () =>{
  loadProjects('./ressources/language.json').then(toggleLanguage);
}

languageswitch.addEventListener('click', switchFunction)


