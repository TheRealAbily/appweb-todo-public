// Get the tags:
const panelDesktop = document.getElementById('container-tasks-desktop');
const panelMobile = document.getElementById('container-tasks-mobile');

// Endpoint:
const url = 'http://127.0.0.1:8000/api/task';

// Function to render tasks:
const renderTasksInit = (tasks) => {
    // Clear the tags:
    panelDesktop.innerHTML = '';
    panelMobile.innerHTML = '';

    tasks.forEach(task => {
        if (task.status == 'pending') {
            // Tasks for desktop version:
            const desktopTaskElement = document.createElement('div');
            desktopTaskElement.classList.add('container__section-section-desktop-div-container__task');
            desktopTaskElement.innerHTML = `
            <div class='container__section-section-desktop-div-container__task-task'>
                <div class='container__section-section-desktop-div-container__task-task-div__top'>
                    <span class='container__section-section-desktop-div-container__task-task-div__top-span material-symbols-outlined'>
                        sticky_note_2
                    </span>
                    <h1 class='container__section-section-desktop-div-container__task-task-div__top-h1'>${task.title}</h1>
                </div>
                <div class='container__section-section-desktop-div-container__task-task-div__middle'>
                    <p class='container__section-section-desktop-div-container__task-task-div__middle-p'>${task.description}</p>
                </div>
                <div class='container__section-section-desktop-div-container__task-task-div__bottom'>
                    <div class='container__section-section-desktop-div-container__task-task-div__bottom-left__container'>
                        <p class='container__section-section-desktop-div-container__task-task-div__bottom-left__container-p'>
                            Created on: ${task.created_at.slice(0, 10)}
                        </p>
                    </div>
                    <div class='container__section-section-desktop-div-container__task-task-div__bottom-right__container'>
                        <p class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-p-pending'>
                            Pending
                        </p>
                        <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-pending'>
                            <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-pending-span material-symbols-outlined'>schedule</span>
                        </span>
                    </div>
                </div>
            </div>`;

            // Add the child:
            panelDesktop.appendChild(desktopTaskElement);

            // Tasks for mobile version:
            const mobileTaskElement = document.createElement('div');
            mobileTaskElement.classList.add('container__section-section-mobile-div-container__task');
            mobileTaskElement.innerHTML = `
            <div class='container__section-section-mobile-div-container__task-task'>
                <div class='container__section-section-mobile-div-container__task-task-div__top'>
                    <span class='container__section-section-mobile-div-container__task-task-div__top-span material-symbols-outlined'>
                        sticky_note_2
                    </span>
                    <h1 class='container__section-section-mobile-div-container__task-task-div__top-h1'>${task.title}</h1>
                </div>
                <div class='container__section-section-mobile-div-container__task-task-div__middle'>
                    <p class='container__section-section-mobile-div-container__task-task-div__middle-p'>${task.description}</p>
                </div>
                <div class='container__section-section-mobile-div-container__task-task-div__bottom'>
                    <div class='container__section-section-mobile-div-container__task-task-div__bottom-left__container'>
                        <p class='container__section-section-mobile-div-container__task-task-div__bottom-left__container-p'>
                            Created on: ${task.created_at.slice(0, 10)}
                        </p>
                    </div>
                    <div class='container__section-section-mobile-div-container__task-task-div__bottom-right__container'>
                        <p class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-p-pending'>
                            Pending
                        </p>
                        <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-pending'>
                            <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-pending-span material-symbols-outlined'>schedule</span>
                        </span>
                    </div>
                </div>
            </div>`;

            // Add the child:
            panelMobile.appendChild(mobileTaskElement);
        }
    });

    // Tasks (desktop & mobile version):
    const task = document.querySelectorAll('section section div div div');

    // Add the event (desktop & mobile version):
    task.forEach(task => {
        task.addEventListener('click', () => {
            window.location.href = 'new_task.html';
        });
    });
};

// Get the tasks:
fetch(url)
    .then(response => {
        if (!response.ok) {
            // Error:
            throw new Error('Server status: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Render tasks to UI:
        renderTasksInit(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
