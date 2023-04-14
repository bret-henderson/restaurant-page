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
    const tab = document.createElement('div');
    tab.classList.add(`${name}-tab`);
    tab.classList.add('tab');
    tab.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    header.appendChild(tab);
  });
}

function createBody(tab) {
  const main = document.createElement('main');
  content.appendChild(main);

  if (tab === 'home') {
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
  if (tab === 'menu') {
    const title = document.createElement('h2');
    title.classList.add('menu-title');
    title.textContent = 'Appetizers';
    main.appendChild(title);

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    main.appendChild(menuItemContainer);
    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = 'French Onion Soup';
    menuItemContainer.appendChild(itemTitle);
    const itemDescription = document.createElement('p');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = 'A classic - made with vegetable broth.';
    menuItemContainer.appendChild(itemDescription);
  }
  if (tab === 'contact') {
    const title = document.createElement('h2');
    title.classList.add('contact-title');
    title.textContent = 'Contact Us';
    main.appendChild(title);

    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location-container');
    main.appendChild(locationContainer);
    const locationTitle = document.createElement('h3');
    locationTitle.classList.add('location-title');
    locationTitle.textContent = 'Headquarters';
    locationContainer.appendChild(locationTitle);
    const location = document.createElement('p');
    location.classList.add('location');
    location.textContent = '123 Main Street';
    locationContainer.appendChild(location);
  }
}

export { loadInitialPage, createBody };
