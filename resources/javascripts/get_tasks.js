// Get the tags:
const panelDesktop = document.getElementById('container-tasks-desktop');
const panelMobile = document.getElementById('container-tasks-mobile');

// Endpoint:
const url = 'http://127.0.0.1:8000/api/task';

// Function to render tasks:
const renderTasks = (tasks) => {
    // Clear the tags:
    panelDesktop.innerHTML = '';
    panelMobile.innerHTML = '';

    tasks.forEach(task => {
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
                        <p class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-p-${task.status}'>
                            ${task.status.charAt(0).toUpperCase() + task.status.slice(1).toLowerCase()}
                        </p>
                        <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-${task.status}'>
                            <span class='container__section-section-desktop-div-container__task-task-div__bottom-right__container-box-${task.status}-span material-symbols-outlined'>
                                schedule
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        `;

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
                        <p class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-p-${task.status}'>
                            ${task.status.charAt(0).toUpperCase() + task.status.slice(1).toLowerCase()}
                        </p>
                        <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-${task.status}'>
                            <span class='container__section-section-mobile-div-container__task-task-div__bottom-right__container-box-${task.status}-span material-symbols-outlined'>
                                schedule
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        `;

        // Add the child:
        panelMobile.appendChild(mobileTaskElement);
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
        // Show the tasks (console):
        console.log(data);

        // Render tasks to UI:
        renderTasks(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
