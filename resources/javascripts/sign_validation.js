a// Const vars:
const path = window.location.pathname;
const name_file = path.substring(path.lastIndexOf('/') + 1);
const form = document.getElementById('form');
const button = document.getElementById('submit-button');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// Add/Delete class:
function validate_input(input, isValid) {
    if (isValid) {
        input.classList.remove('content__middle-invalid-input');
    }
    else {
        input.classList.add('content__middle-invalid-input');
    }

    // Animation:
    void input.offsetWidth;
}

// Toggle button:
function switch_state(inputs) {
    // Const:
    const allValid = inputs.every(input => !input.classList.contains('content__middle-invalid-input') && input.value.length > 0);

    // Toggle:
    if (allValid) {
        button.classList.remove('content__middle-invalid-button');
        button.classList.add('content__middle-valid-button');
    }
    else {
        button.classList.remove('content__middle-valid-button');
        button.classList.add('content__middle-invalid-button');
    }
}

// Validation on input:
function validation_event(input, validationFn, relatedInputs = []) {
    input.addEventListener('input', function () {
        validate_input(input, validationFn(input.value));
        switch_state([input, ...relatedInputs]);
    });
}

// Validation functions:
function validate_email(value) {
    return emailPattern.test(value);
}

function validate_username(value) {
    return value.length >= 6 && value.length <= 20 && !value.includes(' ');
}

function validate_password(value) {
    return value.length >= 8 && value.length <= 35;
}

function validate_cpassword(password, confirmPassword) {
    return validate_password(confirmPassword) && password === confirmPassword;
}

// Sign in:
if (name_file === 'sign_in.html') {
    let user_email_input = document.getElementById('user-email');
    let password_input = document.getElementById('password');

    // Input validation:
    validation_event(user_email_input, value => validate_email(value) || validate_username(value), [password_input]);
    validation_event(password_input, validate_password, [user_email_input]);
}
else { // Sign up:
    let username_input = document.getElementById('username');
    let email_input = document.getElementById('email');
    let password_input = document.getElementById('password');
    let c_password_input = document.getElementById('c-password');

    // Input validation:
    validation_event(username_input, validate_username, [email_input, password_input, c_password_input]);
    validation_event(email_input, validate_email, [username_input, password_input, c_password_input]);
    validation_event(password_input, validate_password, [username_input, email_input, c_password_input]);
    validation_event(c_password_input, value => validate_cpassword(password_input.value, value), [username_input, email_input, password_input]);
}

// Submit verification:
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Var:
    let validInputs = false;

    // Sign in:
    if (name_file === 'sign_in.html') {
        // Inputs:
        let user_email_input = document.getElementById('user-email');
        let password_input = document.getElementById('password');

        // Verification of values:
        const validUserEmailInput = validate_email(user_email_input.value) || validate_username(user_email_input.value);
        const validPasswordInput = validate_password(password_input.value);

        // Input validation:
        validate_input(user_email_input, validUserEmailInput);
        validate_input(password_input, validPasswordInput);

        // Correct form:
        validInputs = validUserEmailInput && validPasswordInput;
    }
    else { // Sign up:
        // Inputs:
        let username_input = document.getElementById('username');
        let email_input = document.getElementById('email');
        let password_input = document.getElementById('password');
        let c_password_input = document.getElementById('c-password');

        // Verification of values:
        const validUsernameInput = validate_username(username_input.value);
        const validEmailInput = validate_email(email_input.value);
        const validPasswordInput = validate_password(password_input.value);
        const validCPasswordInput = validate_cpassword(password_input.value, c_password_input.value);

        // Input validation:
        validate_input(username_input, validUsernameInput);
        validate_input(email_input, validEmailInput);
        validate_input(password_input, validPasswordInput);
        validate_input(c_password_input, validCPasswordInput);

        // Correct form:
        validInputs = validUsernameInput && validEmailInput && validPasswordInput && validCPasswordInput;
    }

    // Send the form:
    if (validInputs) {
        form.submit();
    }
    else {
        button.classList.add('content__middle-invalid-button');
        void button.offsetWidth;
    }
});
