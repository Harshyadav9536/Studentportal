// harsh.js
function showGreeting() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    const greetingSection = document.getElementById('personalGreeting');

    if (name) {
        greetingSection.innerHTML = `<h2>Hello, ${name}!</h2>`;
    } else {
        greetingSection.innerHTML = `<h2>Please enter your name.</h2>`;
    }
}

