function menuTab() {
    const housing = document.createElement('div');
    housing.className = 'housing';

    const top = document.createElement('div');
    top.className = 'top';
    top.textContent = "Katherine's Menu"

    const beverage = document.createElement('div');
    beverage.className = 'beverage';
    beverage.innerHTML = `Beverages`;

    const beverageOptionOne = document.createElement('div');
    beverageOptionOne.className = 'option-one';
    beverageOptionOne.innerHTML = ''

    housing.append(top, beverage);

    // return housing;
}

export { menuTab };