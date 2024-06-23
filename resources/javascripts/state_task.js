// Variables:
const input_title = document.getElementById('title-task');
const input_description = document.getElementById('description-task');
const footer = document.getElementById('mcb-footer-content');
const url = 'http://127.0.0.1:8000/api/task';
let id_task = 60;

// Check inputs:
function check(input) {
    // Input (title):
    if (input == 'title') {
        if (input_title.value.trim() === '') {
            if (input_title.classList.contains('mcb-title-content-input')) {
                input_title.classList.remove('mcb-title-content-input');
                input_title.classList.add('mcb-title-content-invalid-input');
            }

            // Restart animation:
            void input_title.offsetWidth;
        }
        else {
            if (input_title.classList.contains('mcb-title-content-invalid-input')) {
                input_title.classList.remove('mcb-title-content-invalid-input');
                input_title.classList.add('mcb-title-content-input');
            }

            // Restart animation:
            void input_title.offsetWidth;
        }
    }

    // Input (description):
    if (input == 'description') {
        if (input_description.value.trim() === '') {
            if (input_description.classList.contains('mcb-description-content-input')) {
                input_description.classList.remove('mcb-description-content-input');
                input_description.classList.add('mcb-description-content-invalid-input');
            }

            // Restart animation:
            void input_description.offsetWidth;
        }
        else {
            if (input_description.classList.contains('mcb-description-content-invalid-input')) {
                input_description.classList.remove('mcb-description-content-invalid-input');
                input_description.classList.add('mcb-description-content-input');
            }

            // Restart animation:
            void input_description.offsetWidth;
        }
    }
}

// Check title:
function checkTitle() {
    if (input_title.value.trim() === '') {
        if (input_title.classList.contains('mcb-title-content-input')) {
            input_title.classList.remove('mcb-title-content-input');
            input_title.classList.add('mcb-title-content-invalid-input');
        }

        // Restart animation:
        void input_title.offsetWidth;
    }
    else {
        if (input_title.classList.contains('mcb-title-content-invalid-input')) {
            input_title.classList.remove('mcb-title-content-invalid-input');
            input_title.classList.add('mcb-title-content-input');
        }

        // Restart animation:
        void input_title.offsetWidth;
    }
}

// Check description:
function checkDescription() {
    if (input_description.value.trim() === '') {
        if (input_description.classList.contains('mcb-description-content-input')) {
            input_description.classList.remove('mcb-description-content-input');
            input_description.classList.add('mcb-description-content-invalid-input');
        }

        // Restart animation:
        void input_description.offsetWidth;
    }
    else {
        if (input_description.classList.contains('mcb-description-content-invalid-input')) {
            input_description.classList.remove('mcb-description-content-invalid-input');
            input_description.classList.add('mcb-description-content-input');
        }

        // Restart animation:
        void input_description.offsetWidth;
    }
}

// Check origin (add/edit):
document.addEventListener('DOMContentLoaded', () => {
    // Check when writing:
    input_title.addEventListener('input', checkTitle);
    input_description.addEventListener('input', checkDescription);

    // New task:
    if (localStorage.getItem('new-task') === 'true') {
        // Button:
        const button_confirm = document.getElementById('confirm-task');

        // Inputs:
        input_title.addEventListener('input', () => {
            // Button:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                if (button_confirm.classList.contains('mcb-footer-content-invalid-button')) {
                    button_confirm.classList.remove('mcb-footer-content-invalid-button');
                    button_confirm.classList.add('mcb-footer-content-button');
                }
            }
            else {
                if (button_confirm.classList.contains('mcb-footer-content-button')) {
                    button_confirm.classList.remove('mcb-footer-content-button');
                    button_confirm.classList.add('mcb-footer-content-invalid-button');
                }
            }
        });
        input_description.addEventListener('input', () => {
            // Button:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                if (button_confirm.classList.contains('mcb-footer-content-invalid-button')) {
                    button_confirm.classList.remove('mcb-footer-content-invalid-button');
                    button_confirm.classList.add('mcb-footer-content-button');
                }
            }
            else {
                if (button_confirm.classList.contains('mcb-footer-content-button')) {
                    button_confirm.classList.remove('mcb-footer-content-button');
                    button_confirm.classList.add('mcb-footer-content-invalid-button');
                }
            }
        });

        // Add the click event:
        button_confirm.addEventListener('click', (event) => {
            // Avoid shipping:
            event.preventDefault();

            // Check the inputs:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                // Data:
                const data = {
                    title: input_title.value.trim(),
                    description: input_description.value.trim(),
                    group_id: 1,
                    deadline: '2024-01-01'
                };

                // Post the data:
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(() => {
                        window.location.href = 'dashboard.html';
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
            else {
                // Check inputs:
                check('title');
                check('description');
            }
        });
    }
    else {
        // Get the task:
        fetch(url + '/' + id_task)
            .then(response => {
                if (!response.ok) {
                    // Error:
                    throw new Error('Server status: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                input_title.value = data.title;
                input_description.value = data.description;
            })
            .catch(error => {
                console.error('Error:', error);
            });

        // New buttons:
        footer.style.flexDirection = 'column';
        footer.innerHTML = `<button class='mcb-footer-content-button-delete' id='delete-task'>Delete</button>
        <button class='mcb-footer-content-button' id='edit-task'>Edit</button>`;

        // Buttons:
        const button_delete = document.getElementById('delete-task');
        const button_edit = document.getElementById('edit-task');

        // Inputs:
        input_title.addEventListener('input', () => {
            // Button:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                if (button_edit.classList.contains('mcb-footer-content-invalid-button')) {
                    button_edit.classList.remove('mcb-footer-content-invalid-button');
                    button_edit.classList.add('mcb-footer-content-button');
                }
            }
            else {
                if (button_edit.classList.contains('mcb-footer-content-button')) {
                    button_edit.classList.remove('mcb-footer-content-button');
                    button_edit.classList.add('mcb-footer-content-invalid-button');
                }
            }
        });
        input_description.addEventListener('input', () => {
            // Button:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                if (button_edit.classList.contains('mcb-footer-content-invalid-button')) {
                    button_edit.classList.remove('mcb-footer-content-invalid-button');
                    button_edit.classList.add('mcb-footer-content-button');
                }
            }
            else {
                if (button_edit.classList.contains('mcb-footer-content-button')) {
                    button_edit.classList.remove('mcb-footer-content-button');
                    button_edit.classList.add('mcb-footer-content-invalid-button');
                }
            }
        });

        // Add the click event (delete):
        button_delete.addEventListener('click', (event) => {
            // Avoid shipping:
            event.preventDefault();

            // Delete the data:
            fetch(url + '/' + id_task, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(() => {
                    window.location.href = 'dashboard.html';
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        });

        // Add the click event (edit):
        button_edit.addEventListener('click', (event) => {
            // Avoid shipping:
            event.preventDefault();

            // Check the inputs:
            if (input_title.value.trim() !== '' && input_description.value.trim() !== '') {
                // Data:
                const data = {
                    title: input_title.value.trim(),
                    description: input_description.value.trim(),
                    group_id: 1,
                    deadline: '2024-01-01'
                };

                // Update the data:
                fetch(url + '/' + id_task, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(response => response.json())
                    .then(() => {
                        window.location.href = 'dashboard.html';
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
            else {
                // Check inputs:
                check('title');
                check('description');
            }
        });
    }
});