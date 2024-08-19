function validateEmailInput() {
    const emailInput = document.getElementById('email').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        feedbackElement.textContent = "Email is valid"; // Email is valid
        feedbackElement.style.textAlign = 'center';
    } else {
        feedbackElement.textContent = "Please enter a valid email address.";
        feedbackElement.style.textAlign = 'center';
    }
}