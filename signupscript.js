const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const signupForm = document.getElementById('signupForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const mobileField = document.getElementById('mobile');

// Function to check validity of each field
function checkFieldValidity(field, message) {
    if (!field.value) {
        field.setCustomValidity(message);
        field.reportValidity();
        return false;
    } else {
        field.setCustomValidity("");
        return true;
    }
}

// Check if passwords match
confirmPassword.addEventListener('input', function () {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }
});

// Add event listener to the signup form
signupForm.addEventListener('submit', function(event) {
    let isFormValid = true;

    // Check each field for validity
    isFormValid &= checkFieldValidity(nameField, "Please enter your name.");
    isFormValid &= checkFieldValidity(emailField, "Please enter your email.");
    isFormValid &= checkFieldValidity(mobileField, "Please enter your mobile number.");

    // Additional validation for mobile field (example: check if it has a valid length)
    if (mobileField.value.length !== 10) {
        mobileField.setCustomValidity("Please enter a valid 10-digit mobile number.");
        mobileField.reportValidity();
        isFormValid = false;
    } else {
        mobileField.setCustomValidity("");
    }

    // If passwords don't match
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity();
        isFormValid = false;
    } else {
        confirmPassword.setCustomValidity("");
    }

    if (!isFormValid) {
        event.preventDefault(); // Prevent form submission
    } else {
        alert("Signup successful!");
    }
});
s