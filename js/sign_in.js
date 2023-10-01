function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'thomas2003' && password === '12345') {
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
