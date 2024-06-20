a// Status button --------------------------------------------------------------------------------------------------

// Get the status button:
const buttonStatus = document.querySelectorAll('span');

// Possible States:
const possibleStatesButton = ['status-pending-button', 'status-pending-button-active',
    'status-delete-button', 'status-delete-button-active',
    'status-done-button', 'status-done-button-active'];
const possibleStatesIcons = ['status-pending-icon', 'status-pending-icon-active',
    'status-delete-icon', 'status-delete-icon-active',
    'status-done-icon', 'status-done-icon-active'];

// Filter:
buttonStatus.forEach(button => {
    const hasState = possibleStatesButton.some(state => button.classList.contains(state));

    if (hasState) {
        button.addEventListener('click', () => {
            // Pending button:
            if (button.classList.contains('button-pending')) {
                if (button.classList.contains('status-pending-button')) {
                    button.classList.remove('status-pending-button');
                    button.classList.add('status-pending-button-active');

                    buttonStatus.forEach(buttonNotClicked => {
                        // Delete:
                        if (buttonNotClicked.classList.contains('status-delete-button-active')) {
                            buttonNotClicked.classList.remove('status-delete-button-active');
                            buttonNotClicked.classList.add('status-delete-button');
                        }

                        // Done:
                        if (buttonNotClicked.classList.contains('status-done-button-active')) {
                            buttonNotClicked.classList.remove('status-done-button-active');
                            buttonNotClicked.classList.add('status-done-button');
                        }
                    });
                }
            }

            // Delete button:
            if (button.classList.contains('button-delete')) {
                if (button.classList.contains('status-delete-button')) {
                    button.classList.remove('status-delete-button');
                    button.classList.add('status-delete-button-active');

                    buttonStatus.forEach(buttonNotClicked => {
                        // Pending:
                        if (buttonNotClicked.classList.contains('status-pending-button-active')) {
                            buttonNotClicked.classList.remove('status-pending-button-active');
                            buttonNotClicked.classList.add('status-pending-button');
                        }

                        // Done:
                        if (buttonNotClicked.classList.contains('status-done-button-active')) {
                            buttonNotClicked.classList.remove('status-done-button-active');
                            buttonNotClicked.classList.add('status-done-button');
                        }
                    });
                }
            }

            // Done button:
            if (button.classList.contains('button-done')) {
                if (button.classList.contains('status-done-button')) {
                    button.classList.remove('status-done-button');
                    button.classList.add('status-done-button-active');

                    buttonStatus.forEach(buttonNotClicked => {
                        // Delete:
                        if (buttonNotClicked.classList.contains('status-delete-button-active')) {
                            buttonNotClicked.classList.remove('status-delete-button-active');
                            buttonNotClicked.classList.add('status-delete-button');
                        }

                        // Pending:
                        if (buttonNotClicked.classList.contains('status-pending-button-active')) {
                            buttonNotClicked.classList.remove('status-pending-button-active');
                            buttonNotClicked.classList.add('status-pending-button');
                        }
                    });
                }
            }
        })
    }
});

// Firts load -----------------------------------------------------------------------------------------------------

// Firts state of the confirm button:
document.addEventListener('DOMContentLoaded', (event) => {
    // Title and description:
    const title = document.getElementById('title-task');
    const description = document.getElementById('description-task');

    // Button:
    const button = document.getElementById('confirm-task');

    // Check:
    if (title.value.trim() === '' || description.value.trim() === '') {
        if (button.classList.contains('mcb-footer-content-right-button')) {
            button.classList.remove('mcb-footer-content-right-button');
        }
        button.classList.add('mcb-footer-content-right-invalid-button');
    }
    else {
        if (button.classList.contains('mcb-footer-content-right-invalid-button')) {
            button.classList.remove('mcb-footer-content-right-invalid-button');
        }
        button.classList.add('mcb-footer-content-right-button');
    }
});

// Submit verification --------------------------------------------------------------------------------------------

// Submit vars:
let firtsTime = false;

const form = document.getElementById('form-new-task');
const button = document.getElementById('confirm-task');
const titleTask = document.getElementById('title-task');
const descriptionTask = document.getElementById('description-task');

// Form submission:
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const titleValue = titleTask.value.trim();
    const descriptionValue = descriptionTask.value.trim();

    // Var:
    let validInputs = titleValue && descriptionValue;

    // Send the form:
    if (validInputs) {
        if (button.classList.contains('mcb-footer-content-right-button')) {
            form.submit();
            window.location.href = 'dashboard.html';
        }
    }
    else {
        button.classList.remove('mcb-footer-content-right-button');
        button.classList.add('mcb-footer-content-right-invalid-button');

        firtsTime = true;

        // Title:
        if (titleValue === '') {
            if (titleTask.classList.contains('mcb-title-content-input')) {
                titleTask.classList.remove('mcb-title-content-input');
                titleTask.classList.add('mcb-title-content-invalid-input');
            }
        }
        else {
            if (titleTask.classList.contains('mcb-title-content-invalid-input')) {
                titleTask.classList.remove('mcb-title-content-invalid-input');
                titleTask.classList.add('mcb-title-content-input');
            }
        }
        void titleTask.offsetWidth;

        // Description:
        if (descriptionValue === '') {
            if (descriptionTask.classList.contains('mcb-description-content-input')) {
                descriptionTask.classList.remove('mcb-description-content-input');
                descriptionTask.classList.add('mcb-description-content-invalid-input');
            }
        }
        else {
            if (descriptionTask.classList.contains('mcb-description-content-invalid-input')) {
                descriptionTask.classList.remove('mcb-description-content-invalid-input');
                descriptionTask.classList.add('mcb-description-content-input');
            }
        }
        void descriptionTask.offsetWidth;
    }
});

// Inputs verification --------------------------------------------------------------------------------------------

// Check inputs:
function checkInputs() {
    const titleValue = titleTask.value.trim();
    const descriptionValue = descriptionTask.value.trim();

    // Check:
    if (titleValue && descriptionValue) {
        button.classList.remove('mcb-footer-content-right-invalid-button');
        button.classList.add('mcb-footer-content-right-button');
    }
    else {
        button.classList.remove('mcb-footer-content-right-button');
        button.classList.add('mcb-footer-content-right-invalid-button');
    }

    // Firts error:
    if (firtsTime) {
        // Title:
        if (titleValue === '') {
            if (titleTask.classList.contains('mcb-title-content-input')) {
                titleTask.classList.remove('mcb-title-content-input');
                titleTask.classList.add('mcb-title-content-invalid-input');
            }
        }
        else {
            if (titleTask.classList.contains('mcb-title-content-invalid-input')) {
                titleTask.classList.remove('mcb-title-content-invalid-input');
                titleTask.classList.add('mcb-title-content-input');
            }
        }
        void titleTask.offsetWidth;

        // Description:
        if (descriptionValue === '') {
            if (descriptionTask.classList.contains('mcb-description-content-input')) {
                descriptionTask.classList.remove('mcb-description-content-input');
                descriptionTask.classList.add('mcb-description-content-invalid-input');
            }
        }
        else {
            if (descriptionTask.classList.contains('mcb-description-content-invalid-input')) {
                descriptionTask.classList.remove('mcb-description-content-invalid-input');
                descriptionTask.classList.add('mcb-description-content-input');
            }
        }
        void descriptionTask.offsetWidth;
    }
}

// Add events:
titleTask.addEventListener('input', checkInputs);
descriptionTask.addEventListener('input', checkInputs);

// Initial check:
checkInputs();