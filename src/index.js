import './style.css';
import * as pageLoadFuncs from './page-load';

pageLoadFuncs.loadInitialPage();
pageLoadFuncs.createBody('home');

function changeTab(e) {
  const main = document.querySelector('main');
  main.remove();
  const tabName = e.target.className.split('-')[0];
  pageLoadFuncs.createBody(tabName);
}

const buttons = document.querySelectorAll('.tab');
buttons.forEach((btn) => {
  btn.addEventListener('click', changeTab);
});
