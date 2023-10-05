
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



var signBtn = document.getElementById("sign_btn");

signBtn.addEventListener("click", function() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    if (
        usernameInput.value.trim() !== "" &&
        passwordInput.value.trim() !== ""
    ) {
        if (passwordInput.value === passwordConfirmationInput.value) {
            alert("Congrats");
        } else {
            alert("Passwords do not match. Please confirm your password.");
        }
    } else {
        alert("Please fill in all required fields.");
    }
});