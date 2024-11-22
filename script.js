// script.js
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.querySelector('h1');
    const hours = new Date().getHours();

    if (hours < 12) {
        greetingElement.textContent = 'Good Morning! Welcome to My Static Website!';
    } else if (hours < 18) {
        greetingElement.textContent = 'Good Afternoon! Welcome to My Static Website!';
    } else {
        greetingElement.textContent = 'Good Evening! Welcome to My Static Website!';
    }
});
