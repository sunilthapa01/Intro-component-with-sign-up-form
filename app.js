const form = document.getElementById('signupForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    clearErrors();

    let isValid = true;

    if (firstName.value.trim() === '') {
        showError('firstNameError', firstName);
        isValid = false;
    }

    if (lastName.value.trim() === '') {
        showError('lastNameError', lastName);
        isValid = false;
    }

    if (!validateEmail(email.value)) {
        showError('emailError', email);
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError('passwordError', password);
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.submit();
    }
});

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (msg) {
        msg.style.display = 'none';
    });

    const errorInputs = document.querySelectorAll('input');
    errorInputs.forEach(function (input) {
        input.classList.remove('error');
    });
}

function showError(errorId, input) {
    const errorMessage = document.getElementById(errorId);
    errorMessage.style.display = 'block';
    input.classList.add('error');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
