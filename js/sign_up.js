
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signup-form');
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
