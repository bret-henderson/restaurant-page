import Logo from '../images/pizza-planet.png';

const content = document.getElementById('content');

const hours = {
  Monday: '6 AM-10 PM',
  Tuesday: '6 AM-10 PM',
  Wednesday: '6 AM-10 PM',
  Thursday: '6 AM-10 PM',
  Friday: '6 AM-10 PM',
  Saturday: '6 AM-10 PM',
  Sunday: '6 AM-10 PM',
};

function loadInitialPage() {
  const header = document.createElement('header');
  content.appendChild(header);

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  header.appendChild(logoContainer);
  const logo = document.createElement('img');
  logo.src = Logo;
  logoContainer.appendChild(logo);

  const tabNames = ['home', 'menu', 'contact'];
  tabNames.forEach((name) => {
    // const tabContainer = document.createElement('div');
    // tabContainer.classList.add('tab-container');
    // header.appendChild(tabContainer);
    const tab = document.createElement('div');
    tab.classList.add(`${name}-tab`);
    tab.classList.add('tab');
    tab.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    header.appendChild(tab);
  });
}

function createBody(tab) {
  if (tab === 'home') {
    const main = document.createElement('main');
    content.appendChild(main);

    const title = document.createElement('h2');
    title.classList.add('home-title');
    title.textContent = 'Pizza Planet';
    main.appendChild(title);

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');
    main.appendChild(aboutContainer);
    const aboutText = document.createElement('p');
    aboutText.classList.add('about-text');
    aboutText.textContent = 'Pizza Planet - voted best pizza in the galaxy!';
    aboutContainer.appendChild(aboutText);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    main.appendChild(hoursContainer);
    const hoursTitle = document.createElement('h3');
    hoursTitle.classList.add('hours-title');
    hoursTitle.textContent = 'Store Hours';
    hoursContainer.appendChild(hoursTitle);

    for (const day in hours) {
      const dayRow = document.createElement('div');
      dayRow.classList.add('day');
      dayRow.textContent = `${day}: ${hours[day]}`;
      hoursContainer.appendChild(dayRow);
    }
  }
}

const buttons = document.querySelectorAll('.tab');

export { loadInitialPage, createBody };
