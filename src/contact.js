function contactTab() {
    const main = document.createElement('div');
    main.className = 'main';

    const firstTab = document.createElement('div');
    firstTab.className = 'first-tab';
    firstTab.textContent = 'Contact Us'

    const secondTab = document.createElement('div');
    secondTab.className = 'second-tab';
    secondTab.innerHTML = `
        <div>Katherine</div>
        <p>Manager</p>
        <p>Phone: 555-555-555</p>
        <p>Email: speaktoKatherine@hotmail.com</p>
    `;

    main.append(firstTab, secondTab);
    return main;
}

export { contactTab };