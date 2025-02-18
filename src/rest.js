import { menuTab } from "./menu.js"
import { contactTab } from "./contact.js";

const header = document.querySelector('#header');
const nav = document.querySelector('#nav');
const content = document.querySelector('#content');
// const footer = document.querySelector('#footer');

function homeTab() {
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    [home, menu, contact].forEach((tab) => tab.className = 'buttons');
    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    nav.append(home, menu, contact);
    header.appendChild(nav);

    const container = document.createElement('div');
    container.className = 'container';

    const title = document.createElement('div');
    title.className = 'title';
    const welcome = document.createElement('div');
    welcome.className = 'welcome';
    const hours = document.createElement('div');
    hours.className = 'hours';
    const location = document.createElement('div');
    location.className = 'location';

    title.textContent = "Katherine's Night Diner";

    welcome.innerHTML = `
        <p class='head'>Katherine's</p>
        <p class='welcome-text'>Katherine's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
    `;

    hours.innerHTML = `
        <p class='head'>Hours</p>
        <p class='text'>Sunday: 8am - 10pm</p>
        <p class='text'>Monday: 6am - 11pm</p>
        <p class='text'>Tuesday: 6am - 11pm</p>
        <p class='text'>Wedbesday: 5am - 2am</p>
        <p class='text'>Thursday: 6am - 11pm</p>
        <p class='text'>Friday: 6am - 11pm</p>
        <p class='text'>Saturday: 6am - 11pm</p>
    `;

    location.innerHTML = `
        <p class='head'>Location</p>
        <p class='text'>123 Forest Drive, Forestville, Maine</p>
    `;

    container.append(title, welcome, hours, location);
    content.appendChild(container);

    const housing = menuTab();
    const reachUs = contactTab();

    home.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(container);
    });

    menu.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(housing);
    });

    contact.addEventListener('click', () => {
        content.innerHTML = '';
        content.appendChild(reachUs);
    });
}

export { homeTab };