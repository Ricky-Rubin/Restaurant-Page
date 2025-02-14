const content = document.querySelector('#content');
const menu = document.createElement('button');

function menuTab() {
    const housing = document.createElement('div');
    housing.className = 'housing';

    const top = document.createElement('div');
    top.className = 'top';

    top.textContent = "Katherine's Menu"
    housing.appendChild(top);
    content.appendChild(housing);

    menu.addEventListener('click', () => {
        housing.style.display = 'flex';
    })    
}

export { menuTab };