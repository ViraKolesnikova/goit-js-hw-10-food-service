import cardTemplate from "../templates/card.hbs";
import menu from "../menu.json";

// console.log(cardTemplate(menu[0]));
const bodyRef = document.querySelector('body');
const menuListRef = document.querySelector('.js-menu');
const themeSwitcherRef = document.querySelector('.theme-switch__toggle');
const menuMarkup = createMenuMarkup(menu);


menuListRef.insertAdjacentHTML('afterbegin', menuMarkup);

bodyRef.classList.add('light-theme');

themeSwitcherRef.addEventListener('change', onSwitcherChangeTheme)


function createMenuMarkup(menu) {
  return menu.map(cardTemplate).join('');
}

function onSwitcherChangeTheme(event) {
  bodyRef.classList.toggle('dark-theme');
  if (bodyRef.classList.contains('dark-theme')) {
    themeSwitcherRef.checked = true;    
  }
}
