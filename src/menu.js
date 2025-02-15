function menuTab() {
    const housing = document.createElement('div');
    housing.className = 'housing';

    const top = document.createElement('div');
    top.className = 'top';
    top.textContent = "Katherine's Menu"

    const beverage = document.createElement('div');
    beverage.className = 'beverage';
    beverage.textContent = `Beverages`;

    const beverageOptionOne = document.createElement('div');
    beverageOptionOne.className = 'option-one';
    beverageOptionOne.innerHTML = `
        <div class='details'>
            <p class='food-name'>Iced Tea</p>
            <p class='price'>$1.99</p>
        </div>
        <p class='food-desc'>Refreshing and perfectly chilled, our iced tea is brewed fresh and served over ice. Enjoy it classic, sweetened, or with a splash of lemon!</p>
        <div class='image'></div>
    `;

    const beverageOptionTwo = document.createElement('div');
    beverageOptionTwo.className = 'option-one';
    beverageOptionTwo.innerHTML = `
        <div class='details'>
            <p class='food-name'>Coffee</p>
            <p class='price'>$1.59</p>
        </div>
        <p class='food-desc'>Rich, aromatic, and brewed to perfection, our coffee is the perfect pick-me-up. Enjoy it black, with cream and sugar, or as your favorite specialty brew!</p>
        <div class='image-one'></div>
    `;

    const beverageOptionThree = document.createElement('div');
    beverageOptionThree.className = 'option-one';
    beverageOptionThree.innerHTML = `
        <div class='details'>
            <p class='food-name'>Soda</p>
            <p class='price'>$2.00</p>
        </div>
        <p class='food-desc'>Cold, fizzy, and refreshing—enjoy your favorite soda, served ice-cold for the perfect thirst quencher!</p>
        <div class='image-two'></div>
    `;

    const breakfast = document.createElement('div');
    breakfast.className = 'breakfast';
    breakfast.textContent = `Breakfast`;

    const breakfastOne = document.createElement('div');
    breakfastOne.className = 'option-one';
    breakfastOne.innerHTML = `
        <div class='details'>
            <p class='food-name'>Pancakes</p>
            <p class='price'>$2.99</p>
        </div>
        <p class='food-desc'>Fluffy, golden pancakes served hot off the griddle, topped with butter and syrup. Add fresh fruit, whipped cream, or chocolate chips for an extra treat!</p>
        <div class='pic-one'></div>
    `;

    const breakfastTwo = document.createElement('div');
    breakfastTwo.className = 'option-one';
    breakfastTwo.innerHTML = `
        <div class='details'>
            <p class='food-name'>Cheese Burgers</p>
            <p class='price'>$4.59</p>
        </div>
        <p class='food-desc'>A juicy, grilled beef patty topped with melted cheese, fresh lettuce, tomatoes, and pickles, all served on a toasted bun. A classic favorite!</p>
        <div class='pic-two'></div>
    `;

    const breakfastThree = document.createElement('div');
    breakfastThree.className = 'option-one';
    breakfastThree.innerHTML = `
        <div class='details'>
            <p class='food-name'>Waffles</p>
            <p class='price'>$3.99</p>
        </div>
        <p class='food-desc'>Golden, crispy on the outside and fluffy on the inside, our waffles are served with butter and syrup. Add fruit, whipped cream, or chocolate for an extra treat!</p>
        <div class='pic-three'></div>
    `;

    housing.append(top, beverage, beverageOptionOne, beverageOptionTwo, beverageOptionThree, breakfast, breakfastOne, breakfastTwo, breakfastThree);

    return housing;
}

export { menuTab };