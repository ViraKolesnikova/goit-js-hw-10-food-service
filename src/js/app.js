import cardTemplate from "../templates/card.hbs";
import menu from "../menu.json";

// console.log(cardTemplate(menu[0]));
const bodyRef = document.querySelector('body');
const menuListRef = document.querySelector('.js-menu');
const themeSwitcherRef = document.querySelector('.theme-switch__toggle');
const menuMarkup = createMenuMarkup(menu);

let theme = bodyRef.classList.add('light-theme');

loadSavedTheme();

menuListRef.insertAdjacentHTML('afterbegin', menuMarkup);
themeSwitcherRef.addEventListener('change', onSwitcherChangeTheme);


function createMenuMarkup(menu) {
  return menu.map(cardTemplate).join('');
}

function onSwitcherChangeTheme(evt) {
  bodyRef.classList.contains('light-theme') ? makeDarkTheme(): makeLightTheme();
}

function makeDarkTheme() {
  bodyRef.classList.replace('light-theme', 'dark-theme');
  themeSwitcherRef.checked = true;
  localStorage.setItem('theme', 'dark');
}

function makeLightTheme() {
  bodyRef.classList.replace('dark-theme', 'light-theme');
  themeSwitcherRef.checked = false;
  localStorage.removeItem('theme');
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return makeDarkTheme();
  }
}