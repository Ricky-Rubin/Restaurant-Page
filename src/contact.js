function contactTab() {
    const reachUs = document.createElement('div');
    reachUs.className = 'reach-us';

    const firstTab = document.createElement('div');
    firstTab.className = 'first-tab';
    firstTab.textContent = 'Contact Us'

    const secondTab = document.createElement('div');
    secondTab.className = 'second-tab';
    secondTab.innerHTML = `
        <div class='kat'>Katherine</div>
        <p>Manager</p>
        <p>Phone: 555-555-555</p>
        <p>Email: speaktoKatherine@hotmail.com</p>
    `;

    const thirdTab = document.createElement('div');
    thirdTab.className = 'third-tab';
    thirdTab.innerHTML = `
        <div class='kat'>Send us a message!</div>
        <form>
            <label for='user-name'>Name: </label>
            <input type='text' id='user-name' name='username'/>

            <label for='email'>Email: </label>
            <input type='email' id='email' name='email'/>

            <label for='textarea'>Message: </label>
            <textarea id='textarea' rows='3'></textarea>
        </form>
    `;

    reachUs.append(firstTab, secondTab, thirdTab);
    return reachUs;
}

export { contactTab };