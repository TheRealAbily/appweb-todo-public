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
        if (button.classList.contains('mcb-footer-content-button')) {
            button.classList.remove('mcb-footer-content-button');
        }
        button.classList.add('mcb-footer-content-invalid-button');
    }
    else {
        if (button.classList.contains('mcb-footer-content-invalid-button')) {
            button.classList.remove('mcb-footer-content-invalid-button');
        }
        button.classList.add('mcb-footer-content-button');
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
        // Keys and values
        const keys = ['name', 'description', 'deadline', 'group_id'];
        const values = [titleValue, descriptionValue, '2000-01-01', 1];

        let task_form = {};
        keys.forEach((key, index) => {
            task_form[key] = values[index];
        });
        console.log(task_form);
        const url = 'http://127.0.0.1:8000/api/task';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task_form)
        })
            .then(response => {
                if (!response.ok) {
                    console.log(response.statusText);
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(responseData => {
                console.log('Datos enviados: ', responseData);
                window.location.href = 'dashboard.html';
            })
            .catch(error => {
                console.error('Error: ', error);
            });
    }
    else {
        button.classList.remove('mcb-footer-content-button');
        button.classList.add('mcb-footer-content-invalid-button');

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
        button.classList.remove('mcb-footer-content-invalid-button');
        button.classList.add('mcb-footer-content-button');
    }
    else {
        button.classList.remove('mcb-footer-content-button');
        button.classList.add('mcb-footer-content-invalid-button');
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