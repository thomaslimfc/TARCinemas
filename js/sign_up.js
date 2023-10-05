
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signup_form');
    const passwordInput = document.getElementById('password');
    const passwordConfirmationInput = document.getElementById('password_confirmation');
    const passwordConfirmationError = document.getElementById('passwordConfirmationError');

    signUpForm.addEventListener('submit', function (e) {
        if (passwordInput.value !== passwordConfirmationInput.value) {
            e.preventDefault(); // Prevent form submission
            passwordConfirmationError.textContent = 'Passwords do not match.';
        }
    });
});



var signBtn = document.getElementById("sign_btn");

signBtn.addEventListener("click", function() {
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var passwordConfirmationInput = document.getElementById("password_confirmation");
    var dateInput = document.getElementById("date");
    var genderInput = document.getElementById("gender");
    var cityInput = document.getElementById("city");

    if (
        usernameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        passwordInput.value.trim() !== "" &&
        passwordConfirmationInput.value.trim() !== "" &&
        dateInput.value.trim() !== "" &&
        genderInput.value !== "0" && // Assuming 0 is the default value for gender
        cityInput.value.trim() !== ""
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

