function validateForm(event) {
    event.preventDefault();

    const username = 'thomas2003';
    const password = '@aA123456789';

    if (document.getElementById('username').value == username && document.getElementById('password').value == password) {
        displayMessage('Login successful');
        alert('Login successful');
    } else {
        displayMessage('Invalid username or password');
        alert('Invalid username or password');
    }
}

function displayMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
