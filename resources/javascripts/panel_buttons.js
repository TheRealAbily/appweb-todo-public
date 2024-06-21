// Functions -----------------------------------------------------------------------------------------------------

// Move dashboard (mobile version):
function move_dashboard(show) {
    const containerTasks = document.getElementById('container-tasks-mobile');
    const containerHtml = document.documentElement;
    const containerBody = document.body;

    if (show == true) {
        containerTasks.style.overflowY = 'hidden';
        containerHtml.style.overflowY = 'hidden';
        containerBody.style.overflowY = 'hidden';

        if (panelButtonsMobileVersion.classList.contains('container__section-mobile-section__hide')) {
            panelButtonsMobileVersion.classList.remove('container__section-mobile-section__hide');
            panelButtonsMobileVersion.classList.add('container__section-mobile-section');
        }

        if (panelButtonsBackgroundMobileVersion.classList.contains('container__section-mobile-section__background__hide')) {
            panelButtonsBackgroundMobileVersion.classList.remove('container__section-mobile-section__background__hide');
            panelButtonsBackgroundMobileVersion.classList.add('container__section-mobile-section__background');
        }
    }
    else {
        containerTasks.style.overflowY = 'auto';
        containerHtml.style.overflowY = 'auto';
        containerBody.style.overflowY = 'auto';

        if (panelButtonsMobileVersion.classList.contains('container__section-mobile-section')) {
            panelButtonsMobileVersion.classList.remove('container__section-mobile-section');
            panelButtonsMobileVersion.classList.add('container__section-mobile-section__hide');
        }

        if (panelButtonsBackgroundMobileVersion.classList.contains('container__section-mobile-section__background')) {
            panelButtonsBackgroundMobileVersion.classList.remove('container__section-mobile-section__background');
            panelButtonsBackgroundMobileVersion.classList.add('container__section-mobile-section__background__hide');
        }
    }
}

// Select/Deselect button from panel:
function switch_state(asideButtons, entered_id) {
    asideButtons.forEach((button) => {
        // Select (desktop version):
        if (button.id === entered_id) {
            // Middle:
            if (button.classList.contains('container__section-section-desktop-aside-div__middle-a')) {
                button.classList.remove('container__section-section-desktop-aside-div__middle-a');
                button.classList.add('container__section-section-desktop-aside-div__middle-a-selected');
            }

            // Bottom:
            if (button.classList.contains('container__section-section-desktop-aside-div__bottom-a')) {
                button.classList.remove('container__section-section-desktop-aside-div__bottom-a');
                button.classList.add('container__section-section-desktop-aside-div__bottom-a-selected');
            }
        }
        // Deselect (desktop version):
        else {
            // Middle:
            if (button.classList.contains('container__section-section-desktop-aside-div__middle-a-selected')) {
                button.classList.remove('container__section-section-desktop-aside-div__middle-a-selected');
                button.classList.add('container__section-section-desktop-aside-div__middle-a');
            }

            // Bottom:
            if (button.classList.contains('container__section-section-desktop-aside-div__bottom-a-selected')) {
                button.classList.remove('container__section-section-desktop-aside-div__bottom-a-selected');
                button.classList.add('container__section-section-desktop-aside-div__bottom-a');
            }
        }

        // Select (mobile version):
        if (button.id === entered_id) {
            // Middle:
            if (button.classList.contains('container__section-mobile-section-div-div__middle-a')) {
                button.classList.remove('container__section-mobile-section-div-div__middle-a');
                button.classList.add('container__section-mobile-section-div-div__middle-a-selected');
            }

            // Bottom:
            if (button.classList.contains('container__section-mobile-section-div-div__bottom-a')) {
                button.classList.remove('container__section-mobile-section-div-div__bottom-a');
                button.classList.add('container__section-mobile-section-div-div__bottom-a-selected');
            }
        }
        // Deselect (mobile version):
        else {
            // Middle:
            if (button.classList.contains('container__section-mobile-section-div-div__middle-a-selected')) {
                button.classList.remove('container__section-mobile-section-div-div__middle-a-selected');
                button.classList.add('container__section-mobile-section-div-div__middle-a');
            }

            // Bottom:
            if (button.classList.contains('container__section-mobile-section-div-div__bottom-a-selected')) {
                button.classList.remove('container__section-mobile-section-div-div__bottom-a-selected');
                button.classList.add('container__section-mobile-section-div-div__bottom-a');
            }
        }
    });
}

// Function to render tasks:
const renderTasks = (tasks, status) => {
    // Clear the tags:
    panelDesktop.innerHTML = '';
    panelMobile.innerHTML = '';

    tasks.forEach(task => {
        if (task.status == status || status == 'all') {
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
            </div>`;

            // Add the child:
            panelMobile.appendChild(mobileTaskElement);
        }
    });
};

// Delete tasks from dashboard:
function show_tasks(type) {
    // Endpoint:
    const url = 'http://127.0.0.1:8000/api/task';

    // Get the tags:
    const panelDesktop = document.getElementById('container-tasks-desktop');
    const panelMobile = document.getElementById('container-tasks-mobile');

    // Clear tags:
    panelDesktop.innerHTML = ``;
    panelMobile.innerHTML = ``;

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
            switch (type) {
                case 'dashboard': {
                    renderTasks(data, 'pending');
                } break;

                case 'completed-tasks': {
                    renderTasks(data, 'done');
                } break;

                case 'tasks-history': {
                    renderTasks(data, 'all');
                } break;

                case 'deleted-tasks': {
                    renderTasks(data, 'delete');
                } break;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    // Tasks (desktop & mobile version):
    const task = document.querySelectorAll('section section div div div');

    // Add the event (desktop & mobile version):
    task.forEach(task => {
        task.addEventListener('click', () => {
            window.location.href = 'new_task.html';
        });
    });
}

// Firts load -----------------------------------------------------------------------------------------------------

// Add the event for the tasks:
document.addEventListener('DOMContentLoaded', (event) => {
    // Tasks (desktop & mobile version):
    const task = document.querySelectorAll('section section div div div');

    // Add the event (desktop & mobile version):
    task.forEach(task => {
        task.addEventListener('click', () => {
            window.location.href = 'new_task.html';
        });
    });
});

// Panel buttons --------------------------------------------------------------------------------------------------

// Panel buttons (desktop version):
const asideButtonsDesktopVersion = document.querySelectorAll('section section aside div a');

// Dashboard click event (desktop version):
asideButtonsDesktopVersion.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('container__section-section-desktop-aside-div__middle-a-selected') || !button.classList.contains('container__section-section-desktop-aside-div__bottom-a-selected')) {
            switch (button.id) {
                case 'dashboard':
                    switch_state(asideButtonsMobileVersion, 'dashboard');
                    switch_state(asideButtonsDesktopVersion, 'dashboard');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'completed-tasks':
                    switch_state(asideButtonsMobileVersion, 'completed-tasks');
                    switch_state(asideButtonsDesktopVersion, 'completed-tasks');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'tasks-history':
                    switch_state(asideButtonsMobileVersion, 'tasks-history');
                    switch_state(asideButtonsDesktopVersion, 'tasks-history');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'deleted-tasks':
                    switch_state(asideButtonsMobileVersion, 'deleted-tasks');
                    switch_state(asideButtonsDesktopVersion, 'deleted-tasks');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'log-out':
                    switch_state(asideButtonsMobileVersion, 'log-out');
                    switch_state(asideButtonsDesktopVersion, 'log-out');
                    move_dashboard(false);
                    break;
            }
        }
    })
});

// Panel buttons --------------------------------------------------------------------------------------------------

// Show panel (mobile version):
const buttonShowPanelMobileVersion = document.getElementById('button-show-panel');
const panelButtonsMobileVersion = document.getElementById('container-panel');
const panelButtonsBackgroundMobileVersion = document.getElementById('container-panel-background');

// Show panel (mobile version):
buttonShowPanelMobileVersion.addEventListener('click', () => {
    move_dashboard(true);
})

// Hide panel (mobile version):
panelButtonsBackgroundMobileVersion.addEventListener('click', () => {
    move_dashboard(false);
})

// Panel buttons (mobile version):
const asideButtonsMobileVersion = document.querySelectorAll('section section div div a');

// Dashboard click event (mobile version):
asideButtonsMobileVersion.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('container__section-mobile-section-div-div__middle-a-selected') || !button.classList.contains('container__section-mobile-section-div-div__bottom-a-selected')) {
            switch (button.id) {
                case 'dashboard':
                    switch_state(asideButtonsDesktopVersion, 'dashboard');
                    switch_state(asideButtonsMobileVersion, 'dashboard');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'completed-tasks':
                    switch_state(asideButtonsDesktopVersion, 'completed-tasks');
                    switch_state(asideButtonsMobileVersion, 'completed-tasks');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'tasks-history':
                    switch_state(asideButtonsDesktopVersion, 'tasks-history');
                    switch_state(asideButtonsMobileVersion, 'tasks-history');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'deleted-tasks':
                    switch_state(asideButtonsDesktopVersion, 'deleted-tasks');
                    switch_state(asideButtonsMobileVersion, 'deleted-tasks');
                    show_tasks(button.id);
                    move_dashboard(false);
                    break;

                case 'log-out':
                    switch_state(asideButtonsDesktopVersion, 'log-out');
                    switch_state(asideButtonsMobileVersion, 'log-out');
                    move_dashboard(false);
                    break;
            }
        }
    })
});